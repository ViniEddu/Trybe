/*exercicio 1*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

/*exercicio 2*/

let soma = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    soma += numbers[index2]
}
console.log('A soma dos arrays é: ',soma);

/*exercicio 3*/


let mediaAritmetica = soma/numbers.length;

console.log(mediaAritmetica)

/*exercicio 4*/

if (mediaAritmetica > 20) {
    console.log('valor maior que 20')
} else if (mediaAritmetica <= 20) {
    console.log('valor menor que 20')
}

/*exercicio 5*/

let maiorValor = 0;
for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] > maiorValor) {
        maiorValor = numbers[index3]
    }
}

console.log('o maior valor é: ', maiorValor)

/*exercicio 6*/

for (let index4 = 0; index4 < numbers.length; index4 += 1) {
   if(numbers[index4] % 2 === 1){
       console.log('esses são os valores ímpares: ', numbers[index4])
   }
}

/*exercicio 7*/

let menorValor = 5000000000;

for (let index5 = 0; index5 < numbers.length; index5 += 1){
    if (numbers[index5] < menorValor) {
        menorValor = numbers[index5]
    }
}

console.log('Esse é o menor valor: ', menorValor)

/*exercicio 8*/


let array = [];

for (let contador = 1; contador <= 25; contador += 1) {
    array.push(contador)
}

console.log(array)

/*exercicio 9*/

for (let contador1 = 0; contador1 <= array.length; contador1 += 1) {
    console.log(contador1 / 2);
}