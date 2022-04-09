/*
Pegar um copo
Colocar o copo em cima da mesa
Abrir a porta da geladeira
Pegar o leite
Fechar a porta da geladeira
Colocar determinada quantidade de leite no copo
Abrir o armário
Pegar o achocolatado
Fechar a porta do armário
Colocar determinada quantidade de achocolatado no copo
Pegar uma colher
Mexer no copo com a colher
*/


/* 
Primeiro eu abro a porta do guarda-roupa;
vejo qual roupa quero pegar para ir a festa;
pego uma peça de calça, camiseta, meia e tênis;
fecho a porta do guarda-roupa;
tiro minha roupa atual;
visto a roupa que escolhi;

prontinho
*/

/*SOMA DOS ARRAYS*/

// let fruits = [3, 4, 10, 1, 12];
// let soma = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//     soma += fruits[index];
// }

// if (soma > 15) {
//     console.log(soma);
// } else {
//     console.log('valor menor que 16');
// }


//Subtração de elemento em Loop

// const n = 8;

// let resultado = 100;

// for (let index = 0; index <= n; index += 1) {
//      resultado -= index;
//      console.log(resultado);
// }

// console.log(resultado)

//Soma de 1 numero até determinado número. Tendo seu início em 1 e somando até 5. Resultado sendo 0 inicialmente será levada em consideração a ordem > 0 + 1 = 1 /*LOOP*/ 1 + 2 = 3 /*LOOP*/ 3 + 3 = 6 / E sucessivamente até que chegue o INDEX á [5].

// let numero = 5;
// let resultado = 0;
// for (let index = 1; index <= 5; index +=1) {
//     resultado += index;
//     console.log(resultado)
// }

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

//Criando o fatorial de 10.

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial)

//Invertendo palavra

let palavra = 'Jéssica de paula Hermes';

console.log('Ultima letra da palavra está ocupando o espaço: ',palavra.length -1)
console.log('A letra que ocupa esse espaço é: ', palavra[6])

 let novaPalavra = [];

for (let index = palavra.length - 1; index >= 0; index -= 1) {
    novaPalavra += palavra[index];
}

console.log('A palavra é: ',palavra)
console.log('A palavra invertida fica: ', novaPalavra);

//exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];