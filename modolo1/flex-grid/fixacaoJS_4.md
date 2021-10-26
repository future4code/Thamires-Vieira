```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let ocorrencias = 0
  for (let i = 0; i <= arrayDeNumeros.lenght; i++){
    if( arrayDeNumeros[i] === numeroEscolhido){
      ocorrencias++
      console.log(`O número ${numeroEscolhido} aparece ${ocorrencias} vezes`)
    }else {
      console.log("número não encontrado")
    }
  }
}
```