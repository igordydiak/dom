const link = document.querySelector('a');
link.textContent = 'igor dydyak personal trainer';
link.href =  'https://igordydiak.github.io/personal-trainer/';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para)

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara.cloneNode(true));
sect.removeChild(document.querySelectorAll('p')[document.querySelectorAll('p').length-1])

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
para.classList.add('selected');


const button = document.createElement('button');
button.innerText = "Click me";
sect.appendChild(button);
button.addEventListener('click',() => alert('Hello') );
//clock
 const clock = document.querySelector('.clock');
 setInterval (() =>clock.innerText = new Date ().toLocaleTimeString(),
    1000 );
    //calk
   // Calc
const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );
