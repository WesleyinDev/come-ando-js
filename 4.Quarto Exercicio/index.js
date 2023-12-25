const nome = prompt('Digite o seu nome completo');
let quantidade = nome.length;
let ultimas = nome.slice(-3);
let minusculas = nome.toLocaleLowerCase();
let maiusculas = nome.toLocaleUpperCase();
let primeiroIndece = nome.indexOf('e');
let ultimoIndece = nome.lastIndexOf('a');
let separar = nome.split(' ');
let separado = separar.map(separar => `"${separar}"`).join(', ');
