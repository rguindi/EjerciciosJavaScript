const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');



// AGREGAMOS LOS BOTONES A LA SECCION 1
const clientes = document.createElement('button');
const productos = document.createElement('button');
const categorias = document.createElement('button');

clientes.innerText = 'Clientes';
clientes.style.margin = '20px';
clientes.addEventListener('click', menuClientes)
productos.innerText = 'Productos';
productos.style.margin = '20px';
productos.addEventListener('click', menuProductos)
categorias.innerText = 'Categorias';
categorias.style.margin = '20px';
categorias.addEventListener('click', menuCategorias)

s1.appendChild(clientes);
s1.appendChild(productos);
s1.appendChild(categorias);



//RELLENAMOS EL HTML CON VISIBILIDAD OCULTA
    //creo tres variable con todo el contenido html de los formularios y la inserto en la seccion dos.
    let seccionClientesHTML = `
    <div id="displayClientes" class= "none">
    <fieldset>
      <legend>Agregar Cliente</legend>
      <form action="" id="postCliente" name="postCliente">
        <label for="id">Id</label>
        <input
          type="number"
          name="id"
          id="id"
          required
        /><br /><br />
  
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" required /><br />
        <br />
        <button type="submit">Agregar Cliente</button> <div id= "errorCliente"></div>
      </form>
    </fieldset>
  
    <fieldset>
      <legend>Buscar por Id</legend>
      <form action="" id="clienteId" name="clienteId">
        <label for="id-cliente2">Id:&nbsp; </label>
        <input
          type="number"
          name="id-cliente2"
          id="id-cliente2"
          required
        /><br /><br />
  
        <button type="submit">Buscar</button>
        <p id="p1"></p>
      </form>
    </fieldset>
  
    <button id="todosClientes">Buscar todos los clientes</button>
    </div>
  `;
  s2.innerHTML = seccionClientesHTML;

    const seccionProductosHTML = `
    <div id="displayProductos" class= "none">
  <fieldset>
    <legend>Agregar Producto</legend>
    <form action="" id="postProducto" name="postProducto">
      <label for="nombreProducto">Nombre</label>
      <input type="text" name="nombre" id="nombreProducto" required /><br />
      <label for="catProducto">Categoria</label>
      <input type="number" name="categoria" id="catProducto" required /><br />
      <label for="precio">Precio</label>
      <input type="number" name="precio" id="precio" required /><br />
      <label for="stock">Stock</label>
      <input type="number" name="stock" id="stock" required /><br />
      <br />
      <button type="submit">Agregar Producto</button><div  id="errorC"></div>
    </form>
  </fieldset>

  <fieldset>
    <legend>Buscar por Id</legend>
    <form action="" id="productoId" name="productoId">
      <label for="id-producto2">Id:&nbsp; </label>
      <input
        type="number"
        name="id-producto2"
        id="id-producto2"
        required
      /><br /><br />

      <button type="submit">Buscar</button>
      <p id="p1"></p>
    </form>
  </fieldset>

  <button id="todosProductos">Buscar todos los productos</button>
  </div>
`;
s2.innerHTML += seccionProductosHTML;

    const seccionCategoriasHTML = `
    <div id="displayCategorias" class= "none">
  <fieldset>
    <legend>Agregar Categoria</legend>
    <form action="" id="postCategoria" name="postCategoria">
      <label for="id">Id</label>
      <input
        type="number"
        name="id"
        required
      /><br /><br />

      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" required /><br />
      <br />
      <button type="submit">Agregar Categoria</button><div id= "errorCategoria"></div>
    </form>
  </fieldset>

  <fieldset>
    <legend>Buscar por Id</legend>
    <form action="" id="categoriaId" name="categoriaId">
      <label for="id-categoria2">Id:&nbsp; </label>
      <input
        type="number"
        name="id-categoria2"
        id="id-categoria2"
        required
      /><br /><br />

      <button type="submit">Buscar</button>
      <p id="p1"></p>
    </form>
  </fieldset>

  <button id="todosCategorias">Buscar todos las categorías</button>
  </div>
`;
s2.innerHTML += seccionCategoriasHTML;

//CREO LAS FUNCIONES QUE HARÁN QUE SE MUESTRE UN CONTENIDO U OTRO
const dClientes = document.getElementById('displayClientes');
const dCategorias = document.getElementById('displayCategorias');
const dProductos = document.getElementById('displayProductos');

function menuClientes(){
  if (dProductos.classList.contains('none') && dCategorias.classList.contains('none')){
    dClientes.classList.toggle('none');
  }
  else{
    dProductos.classList.add('none');
    dCategorias.classList.add('none');
    dClientes.classList.toggle('none');

  }
}
function menuProductos(){
  if (dCategorias.classList.contains('none') && dClientes.classList.contains('none')) dProductos.classList.toggle('none');
  else{
    dClientes.classList.add('none');
    dCategorias.classList.add('none');
    dProductos.classList.toggle('none');
  }
}
function menuCategorias(){
  if (dProductos.classList.contains('none') && dClientes.classList.contains('none')) dCategorias.classList.toggle('none');
  else{
    dProductos.classList.add('none');
    dClientes.classList.add('none');
    dCategorias.classList.toggle('none');
    
  }
}










