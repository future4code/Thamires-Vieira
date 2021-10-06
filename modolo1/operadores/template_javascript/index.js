//Exercício de Interpretação de Código

//Exercício 1
//a. false
//b. false
//c. true
//d. boolean

//Exercíco 2
// Será impresso os números concatenados, pois precisa transformar a resposta do número que é uma string em number.
//Ex: 5 + 4 = 54

//Exercício 3
//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//const soma = (Number(primeiroNumero) + Number(segundoNumero))
//console.log(soma)

//Exercícios de Escrita de código.
//Exercício 1

const idadeUsuario = prompt("Qual a sua idade?")
const idadeMelhorAmigue = prompt("Qual a idade de seu melhor amigue?")

let idadeMaior = Number(idadeUsuario) > Number(idadeMelhorAmigue)
let diferençaIdade = Number(idadeUsuario) - Number(idadeMelhorAmigue)

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
console.log("A diferença de idade é", diferençaIdade)

//Exercício 2
const numeroPar = prompt("Insira um número par!")
let resultado = Number(numeroPar) % 2 

console.log(resultado)

// c) Todos retornam o número 0 de resto.
// d) Retorna um valor de resto diferente de 0.

//Exercício 3
const idadeUsuario = prompt("Quantos anos você tem?")

const dias = 365 * Number(idadeUsuario)
const meses = dias / 30
const horas = 24 * dias

console.log("Você tem", idadeUsuario, "anos", ",", meses, "meses,", dias, "dias e", horas, "horas")

//Exercício 4 
const numeroUm = prompt("Digite um número")
const numeroDois = prompt("Digite outro número")

const numeroMaior = Number(numeroUm) > Number(numeroDois)
const numeroIgual = Number(numeroUm) === Number(numeroDois)
const numeroDivisivel = Number(numeroUm) % Number(numeroDois) === 0 
const numeroSegundoDivisao = Number(numeroDois) % Number(numeroUm) === 0


console.log(numeroMaior)
console.log(numeroIgual)
console.log(numeroDivisivel)
console.log(numeroSegundoDivisao)

//Desafio
//1
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
let fahrenheit = 77
let convertFtoK = (fahrenheit - 32) * (5/9) + 273.15
console.log(convertFtoK)

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
let celsius = 80
let convertCtoF = (celsius * 9/5) + 32 
console.log(convertCtoF)
// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
celsius = 30
convertCtoF = (celsius * 9/5) + 32
console.log(convertCtoF)
convertFtoK = (convertCtoF - 32) * (5/9) + 273.15
console.log(convertFtoK)

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
celsius = prompt("Digite graus em Cº")
convertCtoF = (celsius * 9/5) + 32
convertFtoK = (convertCtoF - 32) * (5/9) + 273.15
console.log(convertFtoK)
//3
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e 
//escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
const lb = 20
let convertLbtoKg = lb / 2.205
console.log("20lb equivalem a", convertLbtoKg, "kg.")

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e 
//escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
const oz = 10.5
let convertOztoKg = oz / 35.274
console.log("10.5oz equivalem a", convertOztoKg, "kg.")

// c) Procure uma forma de converter milha (mi) para metro (m) e 
//escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
const mi = 100
let convertMitoM = mi * 1609
console.log("100mi equivalem a", convertMitoM,"m.")

// d) Procure uma forma de converter pés (ft) para metro (m) e 
//escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
const ft = 50
let convertFttoM = ft / 3.281
console.log("150ft equivalem a", convertFttoM,"m.")

// e) Procure uma forma de converter galão (gal) para litro (l) e 
//escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
const gal = 103.56
let convertGaltoL = gal * 3.785
console.log("103.56gal equivalem a", convertGaltoL,"L.")

// f) Procure uma forma de converter xícara (xic) para litro (l) e 
//escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
const xic = 450
let convertXictoL = (xic * 6) / 25
console.log("450xic equivalem a", convertXictoL,"L.")

// g) Escolha ao menos **um** dos itens anteriores e modifique o 
//programa para que ele peça ao usuário o valor da unidade original antes de converter

