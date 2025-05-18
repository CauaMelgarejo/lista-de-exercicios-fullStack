const prompt = require('prompt-sync')()

let number = Number(prompt("Digite um número:"));

if(number%2 === 0){
    console.log("Seu número é par")
}else(
    console.log("Seu núemro é impar")
)


