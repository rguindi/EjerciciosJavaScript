//Parte 1
document.body.style.backgroundColor = 'grey';

const divPrincipal = document.createElement('div');
const todos = document.body.innerHTML;
document.body.appendChild(divPrincipal);
divPrincipal.appendChild(todos);    


divPrincipal.style.display = 'flex';
divPrincipal.style.justifyContent = 'center';