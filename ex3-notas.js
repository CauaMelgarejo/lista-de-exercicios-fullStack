// Implemente um programa que recebe uma 
// nota de 0 a 10 e classifica como "Aprovado",
//  "Recuperação", ou "Reprovado" utilizando
//  if-else if.

let prompt = require('prompt-sync')();

let number1 = Number(prompt("Digite sua nota: "))

if(number1 <= 3){
    console.log(`Sua nota: ${number1}, você esta reprovado`)
}else if (number1 >= 4 && number1 <= 5){
    console.log(`Sua nota: ${number1}, Você ficou em recuperação`)
}else if(number1 >= 6 && number1 <= 10){
    console.log(`Sua nota: ${number1}, Você está aprovado`)
}else{
    console.error("ERRO!! número inválido")
}