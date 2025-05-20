let prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
    console.error("Os valores são iguais. Tente novamente com valores diferentes.");
} else if (valor1 < valor2) {
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}