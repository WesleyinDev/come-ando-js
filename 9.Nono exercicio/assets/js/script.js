const conteudo = document.querySelector('.container');
const elementos = [ 
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function adicao () {
    for (let i = 0; i < elementos.length; i++) {
        const elemento = document.createElement(elementos[i].tag);
        elemento.textContent = elementos[i].texto;

        conteudo.appendChild(elemento);
    }
}
adicao();
