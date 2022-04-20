const body = document.getElementById('container');

body.style.backgroundColor = 'white';

const header = document.getElementById('header-container');

header.style.backgroundColor = 'green';
header.style.color = 'white';



const paiSection1 = document.querySelector('.emergency-tasks');

paiSection1.style.backgroundColor = 'orange';


const section1 = document.querySelectorAll('.emergency-tasks div h3');

for(let i = 0; i < section1.length; i += 1){
section1[i].style.color = 'white';
section1[i].style.backgroundColor = 'pink';
}

const paiSection2 = document.querySelector('.no-emergency-tasks');

paiSection2.style.backgroundColor = 'yellow';

const section2 = document.querySelectorAll('.no-emergency-tasks div h3');

for(let i = 0; i < section2.length; i += 1){
section2[i].style.color = 'white';
section2[i].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');

footer.style.backgroundColor = 'green';
footer.style.color = 'white';




