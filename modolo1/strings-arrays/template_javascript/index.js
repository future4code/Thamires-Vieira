//Exercício interpretação de código
//a.  undefined
//b.  null
//c.  11
//d.  3
//e.  [3, 19,  5,  6,  7, 8,  9, 10, 11, 12, 13]
//f.  9

//Ex:2
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

//Exercícios de escrita de código
// 1.
const nomeDoUsuario = prompt("Digite seu nome:")
const emailDoUsuario = prompt("Digite seu e-mail:")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o)," + nomeDoUsuario + "!")

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
let comidas = ["Feijoada", "Macarrão", "Pizza", "Brigadeiro"]    

console.log(comidas)
console.log(`Essas são as minhas comidas preferidas: 
${comidas[0]} 
${comidas[1]}
${comidas[2]}
${comidas[3]}`)

const addComidaPreferida = prompt("Qual é a sua comida preferida?")
comidas[1] = addComidaPreferida
console.log(comidas)


// 3. 
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = []
        
//  b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const tarefa1 = prompt("Digite uma tarefa que você precisa realizar no dia")
const tarefa2 = prompt("Digite mais uma tarefa que você precisa realizar no dia")
const tarefa3 = prompt("Digite uma última tarefa que você precisa realizar no dia")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
        
//c) Imprima o array no console
console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2:")    

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(Number(tarefaRealizada), 1)

//f) Imprima o array no console
console.log(listaDeTarefas)

//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
const frase = prompt("Digite uma frase")
const arrayfrase = frase.split(" ")
console.log(arrayfrase)

//Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const abacaxi = "Abacaxi"
const index = array.indexOf("Abacaxi")

console.log(index, array.length)
//OU
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexAbabaxi = frutas.indexOf("Abacaxi");
const tamanhoArray = frutas.length;

console.log("Index abacaxi: ", indexAbabaxi, "tamanho do array:", tamanhoArray);