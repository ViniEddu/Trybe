let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index6 = 1; index6 < numeros.length; index6 += 1) {
    for (let index7 = 0; index7 < index6; index7 += 1) {
        if (numeros[index6] < numeros[index7]) {
            let position = numeros[index6];
            numeros[index6] = numeros[index7];
            numeros[index7] = position;
            
        }
    }
}

console.log(numeros);

/*exercicio 2*/

for (let index6 = 1; index6 < numeros.length; index6 += 1) {
    for (let index7 = 0; index7 < index6; index7 += 1) {
        if (numeros[index6] > numeros[index7]) {
            let position = numeros[index6];
            numeros[index6] = numeros[index7];
            numeros[index7] = position;
            
        }
    }
}

console.log(numeros);

/*exercicio 3*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array = [];

for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
       let resultado = index*index2;
    }
}*/


console.log(numeros);