//Exercícios de interpretação de código
//FUNCAO - É UM TRECCHO DE CÓDIGO QUE PODE SER CHAMADA ATRAVES DE SEU NOME
//1.
//a)
//    10
//    50
//b) Daria erro, por causa do return.

//2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a) retorna se no texto há ou não a palavra cenoura
//b)
//i.   Eu gosto de cenoura       =>true
//ii.  CENOURA é bom pra vista   =>true 
//iii. Cenouras crescem na terra =>true

//Exercícios de escrita de código

//1.a;
// function informarSobreMim(){
//     const nome = "Thamires"
//     const idade = 29
//     const cidade = "São Paulo"
//     const estudante = "estudante"
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}`)
// }
// informarSobreMim()

//b.
// function informarSobreMim(nome, idade, cidade, profissao){
//     return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// console.log(informarSobreMim("Ruy", 28, "São Paulo", "Publicitário"))

//2.
//a.
// function somarDoisParametros(param1,param2){
//     const soma = param1 + param2
//     return soma
//    }
//    const resultado = somarDoisParametros(2,4)
//    console.log(resultado)

//b.
// function verificarIgualdade(numA, numB){
//     const verIgualdade = numA >= numB
//     return verIgualdade
//    }
//    const resultado = verificarIgualdade(2,2)
//    console.log(resultado)

//c.
// function verificarNumPar(numero){
//     const verficaPar = numero % 2 === 0
//     return verificaPar
//    }
//    const resultado = verificarNumPar(4)
//    console.log(resultado)

//d. 
// function imprimirMensagem(mensagem){
//     console.log("Tamanho da mensagem", mensagem.lenght)
//     console.log(mensagem.toUpperCase())
//   }
//   imprimirMensagem("Olá, me chamo Thamires")


//3.
// const numero1 = Number(prompt("Informe um número:"))
// const numero2 = Number(prompt("Informe mais um número:"))

// function somar(numero1, numero2){
//  const soma = numero1 + numero2
//  return soma
// }
// const resultadoSoma = somar(numero1, numero2)
// console.log(resultadoSoma)

// function diferenca(numero1, numero2){
//  const diferenca = numero1 - numero2
//  return diferenca
// }
// const resultadoDiferenca = diferenca(numero1, numero2)
// console.log(resultadoDiferenca)   

// function multiplicar(numero1, numero2){
//   const multiplicar = numero1 * numero2
//   return multiplicar
// }
// const resultadoMultiplica = multiplicar(numero1, numero2)
// console.log(resultadoMultiplica) 

// function dividir(numero1, numero2){
//   const dividir = numero1 / numero2
//   return dividir
// }
// const resultadoDivisao = dividir(numero1, numero2)
// console.log(resultadoDivisao)