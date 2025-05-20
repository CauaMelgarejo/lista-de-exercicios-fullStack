// As maçãs custam R$ 0, 30 se forem compradas menos do que uma dúzia, 
// e R$ 0, 25 se forem compradas pelo menos doze.
// Escreva um algoritmo que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra.
let prompt = require('prompt-sync')()
let quantidadeMacas = Number(prompt("Quantas maças você irá comprar? "))

if(quantidadeMacas < 12){
    let calculoMacas = quantidadeMacas * 0.30
    console.log(`Você comprou ${quantidadeMacas} maças.O valor ficou R$ ${calculoMacas}`)
}else if(quantidadeMacas >= 12){
    let calculoMacas = quantidadeMacas * 0.25
    console.log(`Você comprou ${quantidadeMacas} maças.O valor ficou R$ ${calculoMacas}`)
}else{
    console.error("ERRO! número inválido")
}