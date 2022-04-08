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
console.log('A soma dos arrays é: ',soma)