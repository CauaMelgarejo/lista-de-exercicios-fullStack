// Escreva um algoritmo para ler um 
// número inteiro e escrevê-lo na tela 10 vezes.
let prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número inteiro: "));

for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}ª vez: ${numero}`);
}