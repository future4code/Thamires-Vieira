// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Qual é a medida da altura?')
  const largura = prompt('Qual é a medida da largura?')
  const area = altura * largura

  console.log(area)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Qual o ano em que estamos?')
  const anoNascimento = prompt('Qual ano você nasceu?')
  const idade = anoAtual - anoNascimento

  console.log(idade)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual é o seu nome?')
  const idade = prompt('Quantos anos você tem?')
  const email = prompt('Qual é o seu e-mail?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual a sua cor favorita?')
  const cor2 = prompt('Qual a sua segunda cor favorita?')
  const cor3 = prompt('Qual a sua terceira cor favorita?')

  const coresFavoritas = []
  coresFavoritas.push(cor1,cor2, cor3)

  console.log(coresFavoritas)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeVendidos = custo / valorIngresso
  return quantidadeVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoStrings = string1.length === string2.length
  return tamanhoStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimo = array[array.length-1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroItem = array[0]
  const ultimoitem = array[array.length-1]
  array[0] = ultimoitem
  array[array.length-1] = primeiroItem

  return array
}
trocaPrimeiroEUltimo()
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const novaString1 = string1.toLowerCase()
  const novaString2 = string2.toLowerCase()
  const igualdadeStrings = novaString1 === novaString2
  return igualdadeStrings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual o ano em que estamos?'))
  const anoNascimento = Number(prompt('Qual ano você nasceu?'))
  const anoEmissaoRG = Number(prompt('Ano de emissão do RG:'))

  const idade = anoAtual - anoNascimento
  const diferenca = anoAtual - anoEmissaoRG

  const condicao1 = idade <= 20 && diferenca === 5
  const condicao2 = idade >=20 && idade <= 50 && diferenca === 10
  const condicao3 = idade > 50 && diferenca === 15

  console.log(condicao1 || condicao2 || condicao3)
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}