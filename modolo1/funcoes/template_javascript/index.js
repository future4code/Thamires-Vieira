//Exercícios de interpretação de código
//FUNCAO - É UM TRECHO DE CÓDIGO QUE PODE SER CHAMADA ATRAVES DE SEU NOME
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
// function verificarNumPar(num){
//   const numeroPar = num % 2 === 0
//   return numeroPar
// }
// console.log(verificarNumPar(4))

//d. 
// function imprimirMensagem(mensagem){
//     const tamanho = mensagem.length
//     console.log("Tamanho da mensagem", tamanho) 
//     console.log(mensagem.toUpperCase())
//     }
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

//DESAFIO
// 1)A.
// const arrorFunction = (parametro1) => {
// console.log(parametro1)
//}
//  
//B.
//const outraArrowFunction = (param1, param2) => {
//  const soma = param1 + param2
//  const resultado = soma
//  console.log(resultado)
// }
// outraArrowFunction(2,4)
//   
// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
//           
//         A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
//         É necessário isolar a hipotenusa, então ao final temos: **hip = √(a² + b²)**
function teoremaPitagoras(cateto1, cateto2){
    const hipotenusa = cateto1 + cateto2
    const hipAoQuadrado = hipotenusa * hipotenusa
    return hipAoQuadrado
}
console.log(teoremaPitagoras(2,4))
