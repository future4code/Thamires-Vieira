// EXECÍCIO DE ESCRITA DE CÓDIGO

//1. 
//o código está somando o índice ao valor. O resultado mostrado na tela será 10, pois i=4<5 + 6 (valor anterior)

//2.
//a) Os número maiores que 18
//19
//21
//23
//25
//27
//30
//b) Sim,  
//for (let numero of lista){
//console.log(numero)
//}

//3.Adiciona um "*" na quantidade de linhas digitadas.
//*
//**
//***
//****

// EXERÍCIO DE ESCRITA DE CÓDIGO

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.    
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"   
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//   Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomes = []

if (bichinhos === 0){
  console.log("Que pena! Você pode adotar um pet!")
}else{
    for (let i = 0; i < bichinhos; i++){
     nomes.push(prompt("Digite o nome, um por um:"))
     console.log(nomes)
    }
}

//2.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a.
function imprimirTodosElementos(){
  for (let numero of arrayOriginal){
    console.log(numero)
  }
}

imprimirTodosElementos(arrayOriginal)
//b.
function imprimirDividido10(){
  for (let numero of arrayOriginal){
    numero = numero / 10
    console.log(numero)
  }
}

imprimirDividido10(arrayOriginal)
//c.
const novoArray = []
function imprimirNumPar(){
  for (let numero of arrayOriginal){
    if (numero % 2 === 0){
     novoArray.push(numero)
    }

  }
  console.log(novoArray)
}

imprimirNumPar(arrayOriginal)
//d.
function imprimirItenEIndex(){
    let resultado = []
    for (let i = 0; i < arrayOriginal.length; i++){
      resultado.push(`O elemento do ${i} é ${arrayOriginal[i]}`)
    }
    console.log(resultado)
  }
  imprimirItenEIndex(arrayOriginal)
//e.
function devolverMeMElemento(array){
  let maior = 0
  let menor = 99
  for (let i = 0; i < arrayOriginal.length; i++){
        if (array[i] > maior)
         maior = array[i]
        if(array[i] < menor)
         menor = array[i] 
    }
  console.log(`O maior número é ${maior} e o menor é ${menor}`)
}
devolverMeMElemento(arrayOriginal)

//DESAFIOS
1.
let num1 = Number(prompt("Escolha um número:"))
let num2 = Number(prompt("Tente adivinhar o número:"))

while (num2 !== num1){
    let diferenca 
    if (num1 > num2){
        diferenca = "menor"
    }else {
        diferenca = "maior"
    }
    console.log(`Errrrrrou! chute um número ${diferenca}`)
    num2 = Number(prompt("Tente adivinhar o número:"))
}
console.log("Acertou!")
