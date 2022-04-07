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

/* exercicio 7 */

let porcentagem = 100;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log('A');
} else if (porcentagem >= 80 && porcentagem <= 100) {
    console.log('B');
} else if (porcentagem >= 70 && porcentagem <= 100) {
    console.log('C');
} else if (porcentagem >= 60 && porcentagem <= 100) {
    console.log('D');
} else if (porcentagem >= 50 && porcentagem <= 100) {
    console.log('E');
} else if (porcentagem < 50 && porcentagem > 0) {
    console.log('F');
} else if (porcentagem < 0 || porcentagem > 100) {
    console.log('ou tu é muito zica, ou tu é mt burro!')
}


/* exercicio 8 */

const nume1 = 22;
const nume2 = 3;
const nume3 = 35;

if (nume1 % 2 === 0 || nume2 % 2 === 0 || nume3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

/* exercicio 9 */

const numer1 = 15;
const numer2 = 3;
const numer3 = 35;

if (numer1 % 2 === 1 || numer2 % 2 === 1 || numer3 % 2 === 1) {
    console.log(true);
} else {
    console.log(false);
}