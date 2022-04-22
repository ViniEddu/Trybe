function textoMaisInfos(){
    let textoMaisInfo = document.getElementById('texto-mais-info');
    textoMaisInfo.innerText = 'Essas informações a mais serão mostradas ao clicar no botão!';
    textoMaisInfo.style.textAlign = 'center';
}

const divQuadrado = document.querySelector('.quadrado');

const inputTexto = document.querySelector('#input-text');

function corQuadrado(){
    divQuadrado.style.backgroundColor = inputTexto.value;
}

inputTexto.addEventListener('keyup', corQuadrado);