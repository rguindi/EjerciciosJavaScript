let celdas = document.getElementsByTagName ('td');

let img = document.createElement('img');
img.setAttribute ('src', 'img/1.jpg');
img.setAttribute ('alt', 'No se encuentra la imagen');
img.setAttribute ('heigth', '200');
img.setAttribute ('width', '200');

celdas [1].appendChild(img);


