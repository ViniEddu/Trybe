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

