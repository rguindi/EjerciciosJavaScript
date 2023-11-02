console.log ("Empieza el programa");
console.log(document.childNodes);

const nodosH = document.getElementsByTagName (`H1`);
console.log(nodosH);
console.log(nodosH[0]);

const nodosP = nodosH[0].getElementsByTagName ('P');
console.log(nodosP);
console.log(nodosP[0]);

console.log(document.scripts);



