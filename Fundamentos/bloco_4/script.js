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

/* exercicio 10 */

const valorCusto = 500;
const valorVenda = 833;
const impostoSobreCusto = (20/100) * valorCusto;
const valorLucro = valorVenda - (valorCusto + impostoSobreCusto);
let quantidadeVendido = 0;

if (quantidadeVendido > 0) {
    console.log('O lucro é de:', quantidadeVendido * valorLucro)
} else if (quantidadeVendido <= 0 || valorLucro <= 0) {
    console.log('Erro!')
}

/* exercicio 11 */

let salarioBruto = 3000;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    console.log(valorDescontoInss = (8/100)*salarioBruto)
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    console.log(valorDescontoInss = (9/100)*salarioBruto)
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    console.log(valorDescontoInss = (11/100)*salarioBruto)
} else if (salarioBruto > 5189.82) {
    console.log(valorDescontoInss =  570.88)
}

console.log('O valor do desconto INSS é: ', valorDescontoInss)

let salarioBase = salarioBruto - valorDescontoInss;

if (salarioBase > 0 && salarioBase <= 1903.98) {
    console.log('Sem desconto');
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
    console.log(valorImpostoRenda = (7.5/100)*salarioBase - 142.80)
} else if (salarioBase > 28626.66 && salarioBase <= 3751.05) {
    console.log(valorImpostoRenda = (15/100)*salarioBase - 354.80)
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
    console.log(valorImpostoRenda = (22.5/100)*salarioBase - 636.13)
} else if (salarioBase > 4664.68) {
    console.log(valorImpostoRenda = (27.5/100)*salarioBase - 869.36)
}

console.log('O valor do imposto de renda é:', valorImpostoRenda);

salarioLiquido = salarioBase - valorImpostoRenda;

console.log('Parabéns esse é o teu salário liquido: BARABAM ', salarioLiquido);