let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numeros);

let arrayVazio = [];

for (let index = 0; index < numeros.length; index += 1) {
    if (index + 1 < numeros.length) {
        arrayVazio.push(numeros[index] * numeros[index + 1]);
    } else {
        arrayVazio.push(numeros[index] * 2);
    }
}

console.log(arrayVazio);