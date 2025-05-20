let prompt = require('prompt-sync')();

console.log("=== MENU ===");
console.log("1 - Dizer Olá");
console.log("2 - Somar 2 + 2");
console.log("3 - Sair");

let opcao = Number(prompt("Escolha uma opção: "));

switch(opcao) {
    case 1:
        console.log("Olá!");
        break;
    case 2:
        console.log("2 + 2 = 4");
        break;
    case 3:
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida!");
}