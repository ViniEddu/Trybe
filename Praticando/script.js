//Criando uma div dentro do main
const section1 = document.createElement('section');
const main = document.getElementById('conteudo-principal');
main.appendChild(section1);
section1.id = 'secao-paleta-cores';

function criaDiv(classe) {
    const divS = document.createElement('div');
    divS.className = classe;
    return divS

}
for (let i = 0; i < 4; i += 1) {
    const cores = criaDiv('cores-paleta');
    section1.appendChild(cores);
}
//Tentando criar input que troque a cor de cada div selecionada
const cabecalhoPagina = document.getElementById('cabecalho');
const inputCor = document.createElement('input');
inputCor.id = 'input-cor'
const paiInput = document.getElementById('pai-input');
paiInput.appendChild(inputCor)

//function com a primeira Div selecionada:
window.onload = primeiraDivSelecionada;

const div1Selecionada = document.querySelector('.cores-paleta')

function primeiraDivSelecionada() {
    div1Selecionada.classList.add('selected');
    return div1Selecionada
}
//funcao que troca qual a div selecionada

const div2Selecionada = document.getElementsByClassName('cores-paleta')[1];
const div3Selecionada = document.getElementsByClassName('cores-paleta')[2];
const div4Selecionada = document.getElementsByClassName('cores-paleta')[3];

div1Selecionada.addEventListener('click', trocaSelecionado);
div2Selecionada.addEventListener('click', trocaSelecionado);
div3Selecionada.addEventListener('click', trocaSelecionado);
div4Selecionada.addEventListener('click', trocaSelecionado);

function trocaSelecionado(event) {
    const selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    event.target.classList.add('selected')

}

//funcao que altera a cor selecionada

function alteraCor1() {
    const selecionado = document.querySelector('.selected');
    selecionado.style.backgroundColor = inputCor.value;

}

inputCor.addEventListener('keyup', alteraCor1);

//Criando os pixels sendo elas inicialmente 25
const section2 = document.createElement('section');
section2.className = 'secao-dos-pixels';
main.appendChild(section2);

for (let i = 0; i < 25; i += 1) {
    const pixels = criaDiv('pixels');
    section2.appendChild(pixels);
}

//Fazendo com que os pixels sejam pintados com a cor de selected;
const secaoPixels = document.querySelector('.secao-dos-pixels');
secaoPixels.addEventListener('click', alteraCorPixel);


function alteraCorPixel(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
//Criando um botão de limpar
const botaoLimpar = document.createElement('button');
botaoLimpar.innerText = 'Limpar';
botaoLimpar.id = 'botao-limpar';
main.appendChild(botaoLimpar);




botaoLimpar.addEventListener('click', limparCores);
function limparCores() {
    const pixels = document.getElementsByClassName('pixels');
    const fundoPixels = document.getElementsByClassName('secao-dos-pixels');
    for (let i = 0; i < pixels.length; i += 1) {
        if (pixels[i].style.backgroundColor !== 'white') {
            pixels[i].style.backgroundColor = 'white';
        }
    }
    for (let i = 0; i < fundoPixels.length; i += 1) {
        if (fundoPixels[i].style.backgroundColor !== 'white') {
            fundoPixels[i].style.backgroundColor = 'white';
        }
    }
}


