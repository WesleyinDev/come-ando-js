const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundImage

for ( let p of ps) {
    p.style.backgroundImage = backgroundBody;
    p.style.color = 'white';
}