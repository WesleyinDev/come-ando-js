let numero = Number(prompt('Digite um numero:'));
const numberTitle = document.getElementById('number');
const texto = document.getElementById('text'); 
const int = document.getElementById('inteiro');
const na1 = document.getElementById('nan');
const up = document.getElementById('cima');
const down = document.getElementById('baixo');
const decimal = document.getElementById('casa');

numberTitle.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada do seu numero: ${numero ** (1/2) }</p>`
int.innerHTML = `<p> ${numero} É um numero inteiro: ${Number.isInteger(numero)}</p>`
na1.innerHTML = `<p>É um NaN: ${Number.isNaN(numero)}</p>`
up.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
down.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
decimal.innerHTML = `<p>Com duas casas deciamis: ${numero.toFixed(2)}</p>`
