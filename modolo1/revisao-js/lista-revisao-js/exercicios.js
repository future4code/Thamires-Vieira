// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b){
      return a - b
  })
}
console.log(array)
// EXERCÍCIO 04
function retornaNumerosPares(array) {
 const numPar = array.filter((item)=>{
     return item % 2 ===0
 })
 return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const numPar = array.filter((item)=>{
    return item % 2 ===0
 })

 const numParElevado = numPar.map ((item) =>{
     return item ** 2
 })
 return numParElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
      if ( array[i] > maior ) {
          maior = array[i];
      }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
        return maior = num1, menor = num2
    } else {
        maior = num2, menor = num1
    }
  return novoObj = {"maiorNumero": maior, "maiorDivisivelPorMenor": (maior % menor === 0), "diferenca": (maior - menor)}
}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0
    let array = []
    while(i <= n){
      if(i % 2 === 0){
       return array.push(i)
      }
    i++ 
    }
    console.log(array)  
  }
console.log(retornaNPrimeirosPares(n))
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    } else {
        return "Isósceles"
    }   
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}