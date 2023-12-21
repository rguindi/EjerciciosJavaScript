const draggableElement = document.getElementById('draggableElement');

draggableElement.draggable = true;

draggableElement.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'Drag me!');
  draggableElement.style.opacity = '0.5'; // Cambia el estilo durante el arrastre
});

draggableElement.addEventListener('dragend', () => {
  draggableElement.style.opacity = '1'; // Restaura el estilo al finalizar el arrastre
});
