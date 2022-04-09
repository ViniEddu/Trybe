// Posição da rainha
let posicaoRainhaLinha = 5; //posicaoRainhaLinha para o computador é entendido somente como número 4
let posicaoRainhaColuna = 6; //posicaoRainhaLinha para o computador é entendido somente como número 2

//Posição outra peça
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 4;

//Identifica se o ataque foi bem sucedido ou não

let ataqueBemSucedido = false;

// Verifica se a peça está na mesma linha

if(posicaoRainhaLinha === posicaoPecaLinha) {
    ataqueBemSucedido = true;
    console.log('o ataque foi bem sucedido')
}

//Verifica se a peça está na mesma coluna

if(posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueBemSucedido = true;
    console.log('O ataque foi bem sucedido')
}
//Verifica se a peça está na mesma diagonal NE

let somaRainha = posicaoRainhaColuna + posicaoRainhaLinha;
let somaPeca = posicaoPecaColuna + posicaoPecaLinha;

if(somaRainha === somaPeca) {
    ataqueBemSucedido = true;
    console.log('ataque bem sucedido na diagonal NE');
}

//A fazer (To do) Calcular as diferenças de coluna e linha para a outra diagonal

// Testar com laço FOR a diagonal SE

for (let index = 1; index <= 7; index += 1) {
let linhaRainha = posicaoRainhaLinha + index;
let colunaRaina = posicaoRainhaColuna + index;

if(linhaRainha === posicaoPecaLinha && colunaRaina === posicaoRainhaColuna) {
    ataqueBemSucedido = true;
    console.log('O ataque foi bem sucedido na diagonal SE');
}
}