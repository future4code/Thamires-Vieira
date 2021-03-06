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
    if(num1 > num2){
        return {"maiorNumero": num1, "maiorDivisivelPorMenor": num1 % num2 === 0, "diferenca": num1 - num2} 
    }else if (num2 > num1) {
        return {"maiorNumero": num2, "maiorDivisivelPorMenor": num2 % num1 === 0, "diferenca": num2 - num1} 
    } else {
       return {"maiorNumero": num1, "maiorDivisivelPorMenor": num2 % num1 === 0, "diferenca": num2 - num1}
    }

}
retornaObjetoEntreDoisNumeros()

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 let pares = []
 for (let i = 0; i < n; i++){
     pares.push(i*2);
 }
return pares
}
retornaNPrimeirosPares()

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
  const arrayOrdenado = array.sort((a, b) => a - b)

  const segundoMaiorValor = arrayOrdenado[arrayOrdenado.length-2]
  const segundoMenorValor = arrayOrdenado[1]

  const arrayResultado = [segundoMaiorValor, segundoMenorValor]
  return arrayResultado
}
retornaSegundoMaiorESegundoMenor()
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let chamada = "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.elenco.join(',') 
    return chamada
}
retornaChamadaDeFilme(filme)
 
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa ={
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((pessoa) => {
      if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
          return true
      }
  }) 
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60){
          return true
      }
  }) 
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function (a, b){
        if (a.nome < b.nome)
        return -1 
        if (a.nome > b.nome)
        return 1
    return 0
    })
 console.log(consultas)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort(function (a, b){
        return a.dataDaConsulta < b.dataDaConsulta
    })
 console.log(consultas)
}