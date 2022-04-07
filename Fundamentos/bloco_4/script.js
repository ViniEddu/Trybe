const a = 55;
const b = 65;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

/* exercicio 2 */

const c = 32;
const d = 33;

if (c > d) {
    console.log(c, ' é maior que', d)
} else if (c < d) {
    console.log(d, ' é maior que', c)
}

/* exercicio 3 */

const num1 = 800;
const num2 = 70;
const num3 = 60;

if (num1 > num2 && num1 > num3) {
    console.log(num1, ' É maior que todos os outros números');
} else if (num2 > num1 && num2 > num3) {
    console.log(num2, ' É maior que todos os outros números');
} else if (num3 > num1 && num3 > num2) {
    console.log(num3, ' É maior que todos os outros números');
}

/* exercicio 4 */

const valor = 0;

if (valor > 0) {
    console.log('positivo')
} else if (valor < 0) {
    console.log('negativo')
} else {
    console.log('zero')
}

/* exercicio 5 */

const angulo1 = 100;
const angulo2 = 50;
const angulo3 = 60;


if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true)
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('Erro, valor inválido')
} else {
    console.log(false)
}


/* exercicio 6 */

let peca = 'peão'.toUpperCase();

switch (peca) {
    case 'PEÃO':
        console.log('o peão anda uma vez para frente ou direita ou esquerda, exceto para trás')
    break
    default:
        console.log('Mensagem de erro')
}