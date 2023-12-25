function formu() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const info = [];

    function receberEvento(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);
        const imc = peso / (altura * altura);

        info.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
            imc: imc
        });

        console.log(info);

        resultado.innerHTML += `<p>${nome} ${sobrenome} - Peso: ${peso} - Altura: ${altura} - Seu IMC é: ${imc}</p>`;
    }

    form.addEventListener('submit', receberEvento);
}

formu();
