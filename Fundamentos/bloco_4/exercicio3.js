let array = ['java', 'javascript', 'python', 'html', 'css'];

//Um algoritmo retorna a maior palavra e outro retorna a menor palavra.
let maior = array[0];
let menor = array[0];



 for (let index = 0; index < array.length; index += 1) {
     if (array[index].length > maior.length) {
         maior = array[index];
     }
 }

 console.log(maior);

 for (let index = 0; index < array.length; index += 1) {
     if (array[index].length < menor.length) {
         menor = array[index];
     }
 }
console.log(menor);
