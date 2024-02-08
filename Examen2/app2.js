const dirIP_api = "192.168.1.134"; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

const form = document.getElementById("form");
let tabla = document.getElementById("tabla");
let busqueda = document.getElementById("busqueda");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (busqueda.value === "") {
    todas();
  } else {
    try {
      let datos = await getNombre(busqueda.value);
      console.log(datos);
      datos.forEach(element => {
        
      

      let tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = element.id;
      const td2 = document.createElement("td");
      td2.innerHTML = element.nombre;
      const td3 = document.createElement("td");
      td3.innerHTML = element.cantidad;
      const bt = document.createElement("button");
      bt.setAttribute("id", element.id);
      bt.innerText = "Eliminar";

      tr.appendChild(td);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(bt);
      tabla.appendChild(tr);
      document.getElementById(element.id).addEventListener('click', function() {
        eliminar(element.id);
      });
    });
    } catch (error) {
      console.log("mal");
      console.error(error);
      return;
    }
  }
});

async function getNombre(nombre) {
  const response = await fetch(
    `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/nombre/` + nombre
  );
  try {
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.log("Fallo fetch");
    throw error;
  }
}

async function eliminar(id) {
  const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("La ciudad ha sido eliminada correctamente");
      todas();
    } else {
      console.error("Error al eliminar la ciudad:", response.statusText);
    }
  } catch (error) {
    console.error("Error al intentar eliminar la ciudad:", error.message);
    throw error; // Lanzamos el error para manejarlo en el código que llama a esta función
  }
}

const todas = async function () {
  try {
    const datos = await getTodasCiudades();
    console.log(datos);

    tabla.innerHTML =`<tr>
    <td>ID</td>
    <td>Nombre</td>
    <td>Cantidad</td>
    <td>Borrar</td>

</tr>`;

    datos.forEach((element) => {
      let tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = element.id;
      const td2 = document.createElement("td");
      td2.innerHTML = element.nombre;
      const td3 = document.createElement("td");
      td3.innerHTML = element.cantidad;
      const bt = document.createElement("button");
      bt.setAttribute("id", element.id);
      bt.innerText = "Eliminar";

      tr.appendChild(td);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(bt);
      tabla.appendChild(tr);

      document.getElementById(element.id).addEventListener('click', function() {
        eliminar(element.id);
      });
    });
  } catch (error) {
    console.log("mal");
    console.error(error);
    return;
  }
};

async function getTodasCiudades() {
  const response = await fetch(
    `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades`
  );
  try {
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.log("Fallo fetch");
    throw error;
  }
}
