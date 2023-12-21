// function makeDraggable(element) {
//     let offsetX, offsetY;
//     let isDragging = false;

//     element.addEventListener('mousedown', (event) => {
//       isDragging = true;
//       offsetX = event.clientX - element.getBoundingClientRect().left;
//       offsetY = event.clientY - element.getBoundingClientRect().top;
//       element.style.cursor = 'grabbing';
//     });

//     document.addEventListener('mousemove', (event) => {
//       if (isDragging) {
//         const x = event.clientX - offsetX;
//         const y = event.clientY - offsetY;
//         element.style.left = `${x}px`;
//         element.style.top = `${y}px`;
//       }
//     });

//     document.addEventListener('mouseup', () => {
//       isDragging = false;
//       element.style.cursor = 'grab';
//     });
//   }

//   const draggableDiv1 = document.getElementById('draggableDiv1');
//   const draggableDiv2 = document.getElementById('draggableDiv2');
//   const draggableDiv3 = document.getElementById('draggableDiv3');

//   makeDraggable(draggableDiv1);
//   makeDraggable(draggableDiv2);
//   makeDraggable(draggableDiv3);

  const draggableDiv1 = document.getElementById('draggableDiv1');

  draggableDiv1.onmousedown = function(event) {

    let shiftX = event.clientX - draggableDiv1.getBoundingClientRect().left;
    let shiftY = event.clientY - draggableDiv1.getBoundingClientRect().top;
  
    draggableDiv1.style.position = 'absolute';
    draggableDiv1.style.zIndex = 1000;
    document.body.append(draggableDiv1);
  
    moveAt(event.pageX, event.pageY);
  
    // mueve la pelota a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function moveAt(pageX, pageY) {
      draggableDiv1.style.left = pageX - shiftX + 'px';
      draggableDiv1.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mueve la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la pelota, elimina el manejador innecesario
    draggableDiv1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      draggableDiv1.onmouseup = null;
    };
  
  };
  
  draggableDiv2.ondragstart = function() {
    return false;
  };
  const draggableDiv2 = document.getElementById('draggableDiv2');

  draggableDiv2.onmousedown = function(event) {

    let shiftX = event.clientX - draggableDiv2.getBoundingClientRect().left;
    let shiftY = event.clientY - draggableDiv2.getBoundingClientRect().top;
  
    draggableDiv2.style.position = 'absolute';
    draggableDiv2.style.zIndex = 1000;
    document.body.append(draggableDiv2);
  
    moveAt(event.pageX, event.pageY);
  
    // mueve la pelota a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function moveAt(pageX, pageY) {
      draggableDiv2.style.left = pageX - shiftX + 'px';
      draggableDiv2.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mueve la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la pelota, elimina el manejador innecesario
    draggableDiv2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      draggableDiv2.onmouseup = null;
    };
  
  };
  
  draggableDiv3.ondragstart = function() {
    return false;
  };
  const draggableDiv3 = document.getElementById('draggableDiv3');

  draggableDiv3.onmousedown = function(event) {

    let shiftX = event.clientX - draggableDiv3.getBoundingClientRect().left;
    let shiftY = event.clientY - draggableDiv3.getBoundingClientRect().top;
  
    draggableDiv3.style.position = 'absolute';
    draggableDiv3.style.zIndex = 1000;
    document.body.append(draggableDiv3);
  
    moveAt(event.pageX, event.pageY);
  
    // mueve la pelota a las coordenadas (pageX, pageY)
    // tomando la posición inicial en cuenta
    function moveAt(pageX, pageY) {
      draggableDiv3.style.left = pageX - shiftX + 'px';
      draggableDiv3.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mueve la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // suelta la pelota, elimina el manejador innecesario
    draggableDiv3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      draggableDiv3.onmouseup = null;
    };
  
  };
  
  draggableDiv3.ondragstart = function() {
    return false;
  };