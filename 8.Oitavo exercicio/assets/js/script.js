function relogio() {
    const hora = document.querySelector('.clock');
    const data = new Date()

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    let diaNome = data.getDay();

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    const dataAtual = `${dia}/${mes}/${ano}`;


    switch (diaNome) {
        case 0:
            diaNome = 'Domingo';
            break;
        case 1:
            diaNome = 'Segunda-feira';
            break;
        case 2:
            diaNome = 'Terça-feira'
            break;
        case 3:
            diaNome = 'Quarta-feira'
            break;
        case 4:
            diaNome = 'Quinta-Feira'
            break;
        case 5:
            diaNome = 'Sexta-feira'
            break;
        case 6:
            diaNome ='Sabado'
            break;
        default:
            diaNome = '';
            break
    }

    hora.innerHTML = `Horário atual: ${horaAtual} <br> Data: ${dataAtual} <br> Hoje é ${diaNome}`;

}

setInterval(relogio, 1000);

relogio();