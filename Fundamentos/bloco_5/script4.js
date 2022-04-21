let toAqui = document.getElementById('elementoOndeVoceEsta');

toAqui.style.color = 'red';
console.log(toAqui);

let toAqui2 = document.getElementById('primeiroFilhoDoFilho');

toAqui2.innerHTML = 'um texto fumado'
console.log(toAqui2)

let paiDoAno= document.getElementById('pai');

console.log(paiDoAno);

const sectionIrma = document.createElement('section');

sectionIrma.id = 'irmaDoElementoOndeEuTava';

paiDoAno.appendChild(sectionIrma);


console.log(sectionIrma)

const sectionFilho = document.createElement('section');

sectionFilho.id = 'filhoDoElementoOndeEuTava';

toAqui.appendChild(sectionFilho);

console.log(toAqui)

const sectionFilhoDoFilho = document.createElement('section');


sectionFilhoDoFilho.id = 'filhoDoFilhoDoFilho';

toAqui2.appendChild(sectionFilhoDoFilho);

console.log(toAqui2)

console.log(sectionFilhoDoFilho.parentElement.parentElement.nextElementSibling)

let pai = document.getElementById('pai');

for(let i = pai.childNodes.length -1;i >= 0; i -= 1){
    let excluir = pai.childNodes[i];
    if(excluir.id !== 'elementoOndeVoceEsta'){
        excluir.remove();
    }
}

let ondeEuTo = document.getElementById('elementoOndeVoceEsta');

for(let i = ondeEuTo.childNodes.length -1;i >= 0; i -= 1){
    let excluir = ondeEuTo.childNodes[i];
    if(excluir.id !== 'primeiroFilhoDoFilho'){
        excluir.remove();
    }
}