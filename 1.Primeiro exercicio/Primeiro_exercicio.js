// 4:37
const nome = 'Wesley';
const sobrenome = 'Vieira';
const idade = 22;
const peso = 79;
const altura = 1.85;
const anoAtual = 2023;
let imc = peso / (altura * altura)
let anoNascimento = anoAtual- idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`);
console.log(`Ele tem ${altura} de altura e seu imc é ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);