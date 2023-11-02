console.log(document.getElementById('input2'));
console.log(document.getElementsByTagName('p'));

console.log(document.querySelectorAll('#lipsum p')); //1º forma
//2ª forma
const nodolipsum = document.getElementById('lipsum');
parrafos = nodolipsum.getElementsByTagName (`P`);
console.log(parrafos);


console.log(document.getElementsByTagName('form'));
console.log(document.getElementsByTagName('input'));
console.log(document.getElementsByName ('sexo'));
console.log(document.querySelectorAll ('li.important'));