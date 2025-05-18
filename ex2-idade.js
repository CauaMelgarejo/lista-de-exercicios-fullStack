// Crie um programa que classifica a idade de uma pessoa em categorias 
// (criança, adolescente, adulto, idoso) com base no valor fornecido,
// utilizando uma estrutura de controle if-else. 
let prompt = require("prompt-sync")();

let idade = Number(prompt("Qual a sua idade? "));

if(idade < 12){
    console.log("Você é uma criança!")
}else if(idade > 12 & idade <= 18){
    console.log("Você é um adolescente")
}else if(idade > 18 & idade <= 60){
    console.log("Você é adulto")
}else if(idade > 60 & idade < 150){
    console.log("Você é um idoso")
}else{
    console.error("Erro!! Prove que você tem mais de 150 anos")
}
