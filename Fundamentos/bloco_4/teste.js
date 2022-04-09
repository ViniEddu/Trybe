let array = [2,4,6,8,9,10];
let resultado = 1;

for(let index = 0; index < array.length;index += 1) {
    resultado *= array[index];
}

console.log(resultado)