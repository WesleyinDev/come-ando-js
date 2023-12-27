function imc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calcular(evento) {
        evento.preventDefault();
        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);
        const imc = peso / (altura * altura);

        if (isNaN(peso)) {
            resultado.classList.add('erro')
            resultado.innerHTML = `Peso inválido`;
        } else if (isNaN(altura)) {
            resultado.classList.add('erro')
            resultado.innerHTML = `Altura inválida`;
        } else if (imc < 18.5) { 
            resultado.classList.remove('erro')
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
        } else if (imc >= 18.6 && imc <= 24.9) {
            resultado.classList.remove('erro')
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (Peso normal)`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.classList.remove('erro')
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (Sobre preso)`;
        } else if(imc >= 30 && imc <= 34.9) {
            resultado.classList.add('erro')
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (Atenção: Obesidade grau 1)`; 
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.classList.add('erro')
            resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (Atenção: Obesidade grau 2)`;
        } else if (imc >= 40) {
            resultado.classList.add('erro')
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Atenção: Obesidade grau 3)`;
        }
    }

    form.addEventListener('submit', calcular);
}

imc();