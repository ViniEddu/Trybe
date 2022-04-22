const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener('click', receberClasse);
secondLi.addEventListener('click', receberClasse);
thirdLi.addEventListener('click', receberClasse);

function receberClasse (evento){
  const classeTech = document.querySelector('.tech');

  classeTech.classList.remove('tech');
  evento.target.classList.add('tech');
  input.value = '';
}



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', addTexto);
function addTexto(){
  const textoLi = document.querySelector('.tech');
  textoLi.innerText = input.value;
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', redirecionarLink);
function redirecionarLink(){
  window.location.replace('https://vinieddu.github.io/');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', alteraCor);
myWebpage.addEventListener('mouseleave', voltaCor);
function voltaCor(){
  myWebpage.style.color = 'white';
}
function alteraCor (){
  myWebpage.style.color = 'red';
}

// Segue abaixo um exemplo do uso de event.target:


