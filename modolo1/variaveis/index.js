/* Exercício de interpretação de código
1- 

10
10, 5

2-

10, 10, 10

3-
Calcula o quanto a pessoa recebe por hora, dividindo o valor que recebe no dia, pela quantidade de horas trabalhadas.

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let valorSalarioPorDia = prompt("Quanto você recebe por dia?")
alert("Você recebe ${valorSalarioPorDia/horasTrabalhadasPorDia} por hora")

*/

let nome;
let idade;

console.log(typeof nome, typeof idade)
//o resultado foi indefinido, pois não há valor atribuído, sendo assim, impossivel definiro tipo de variável.

//1
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)
// // string string

console.log("Olá", nome,",", "você tem", idade, "anos.")

//2-

let ehMaiorDeIdade = prompt("Você é maior de 18 anos?")
let ehEstudante = prompt("Você é Estudante?")
let trabalhaAtualmente = prompt("Você trabalha atualmente?")

let respostaIdade = "Sim"
let respostaEstudante = "Sim"
let respostaTrabalho = "Não"

console.log(ehMaiorDeIdade, respostaIdade)
console.log(ehEstudante, respostaEstudante)
console.log(trabalhaAtualmente, respostaTrabalho)

//3-
let a = 10
let b = 25

let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)


//Desafio
let numeroUm = prompt("Escolha um número")
let numeroDois = prompt("Escolha outro número")

console.log(Number(numeroUm) + Number(numeroDois))
console.log(Number(numeroUm) * Number(numeroDois))