

function desativaBotao(event){
    event.preventDefault();
}
const botaoSubmit = document.getElementById('botao');

const divBotoes = document.getElementById('botoes');

const botaoLimpar = document.createElement('button');
botaoLimpar.id = 'botao';
botaoLimpar.type = 'reset';
botaoLimpar.innerText = 'Limpar';
divBotoes.appendChild(botaoLimpar)

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', validateAndSubmit, false);

function validateAndSubmit(event){
    //prevenindo o evento padrão
    event.preventDefault();
    //Fazendo a validação e enviando caso esteja OK
    let value = input.value;

    if(value.length < 10){
        alert('Dados Inválidos, insira seu nome completo');
    }else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        form.submit();
    }
}