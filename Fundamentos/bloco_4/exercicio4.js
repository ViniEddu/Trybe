//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//Se resto 2 === 0 então não é primo sendo assim Se resto 2 === 1 é primo!

let maiorNumeroPrimo = 0;

for(let numeroAtual = 0; numeroAtual <= 50; numeroAtual +=1) {
    let ePrimo = true;
    for(let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual+=1) {
        if(numeroAtual % divisorAtual === 0) {
            ePrimo = false;
        }
    }
    if(ePrimo) {
        maiorNumeroPrimo = numeroAtual;
    }
}

console.log(maiorNumeroPrimo);