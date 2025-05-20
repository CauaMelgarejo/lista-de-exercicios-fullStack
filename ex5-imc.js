// Escreva um programa que calcula o Índice
// de Massa Corporal (IMC) de uma pessoa e
//  determina a categoria de peso 
// (baixo peso, peso normal, sobrepeso, obesidade)
//  utilizando if-else.
let prompt = require('prompt-sync')()

let peso = Number(prompt("Qual é seu peso? "))
let altura = Number(prompt("Qual a sua altura? "))
let imc = peso/(altura*2)
imc = imc.toFixed(2)
if (imc <= 18.5){
    console.log(`Seu IMC: ${imc}, Abaixo do peso`)
}else if(imc >= 18.6 && imc <=24.9){
    console.log(`Seu IMC: ${imc}, Parabens! Peso ideal`)
}else if(imc >= 25 && imc <= 29.9){
    console.log(`Seu IMC: ${imc}, Atenção você está acima do peso`)
}else if(imc >= 30 && imc <= 34.9){
    console.log(`Seu IMC: ${imc}, Obesididade Grau I`)
}else if(imc >= 35 && imc <= 39.9){
    console.log(`Seu IMC: ${imc}, Obesididade Grau II`)
}else if(imc >= 40){
    console.log(`Seu IMC: ${imc}, Obesididade Grau III`)
}else{
    console.error("Atenção! houve um erro ao calcular seu imc, verifique os valores colocados")
}
