//Exercícios de interpretação de código
// 1. 
//     a) Explique o que o código faz. Qual o teste que ele realiza? 
  // Testa se o número é per, se o resto da divisão do número por 2 for 0, então entra na primeira condição.
//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
 // Números pares
//     c) Para que tipos de números a mensagem é "Não passou no teste"? 
 // Números ímpares

// 2. 
//     a) Para que serve o código acima?
    // Para precificar as frutas.
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    //O preço da fruta Maçã, é , R$2,25.
//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    //O preço da fruta Pêra, é , R$5,50.

// 3.   
//     a) O que a primeira linha está fazendo?
    // Pedindo para o usuário digitar um número
//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // Para o caso do número 10 - Esse número passou no teste,no caso do -10 - mensagem não definida
//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    //Sim, a mensagem esta num escopo que não pode ser acessado sem o return.

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).   
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.   
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.   
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
//imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Digite a sua idade:"))

function permiteDirigir (){
    if (idade >= 18){
        console.log("Você pode dirigir")
    }else {
        console.log("Você não pode dirigir")
    }
}
permiteDirigir()

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V**
// (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o 
//bloco `if/else`  

//         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)      
//         Se o usuário digitar "V", a saída deve ser:
//         "Boa Tarde!"

const periodo = prompt("Digite qual o periodo que você estuda M, V ou N")

function imprimirMensagem (){
    if (periodo === "M"){
        console.log("Bom dia!")
    }else if (periodo === "V") {
        console.log("Boa tarde!")
    }else if (periodo === "N") {
        console.log("Boa noite!")
    }else {
        console.log("Digite apenas M, N ou V.")
    }
}
imprimirMensagem()
        
    
// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
const periodo2 = prompt("Digite qual o periodo que você estuda M, V ou N")

switch (periodo2){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N': 
        console.log("Boa noite!")
        break
    default:
        console.log("Digite apenas M, N ou V.")
        break
}    

    
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se 
//ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o 
//gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai 
//topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `
//"Escolha outro filme :("`

const filme = {
    genero: prompt("Qual é o gênero do filme?"),
    valor_ingresso:Number(prompt("Qual o valor do ingresso?"))
}

function assistirFilme (){
    if (filme.genero === "fantasia" && filme.valor_ingresso <= 15){
        console.log("Bom filme! :D")
    }else{
        console.log("Escolha outro filme :(")
    }
}  
assistirFilme()

// DESAFIO
// 1. 
const filme2 = {
    genero: prompt("Qual é o gênero do filme?"),
    valor_ingresso:Number(prompt("Qual o valor do ingresso?"))
}

function assistirFilme2 (){
    if (filme2.genero === "fantasia" && filme2.valor_ingresso <= 15){
        const lanche = prompt("Qual lanche você irá comprar?(pipoca, chocolate, doces, etc)") 
        console.log(`Bom filme! :D, aproveite o seu ${lanche}`)
    }else{
        console.log("Escolha outro filme :(")
    }
}  
assistirFilme2()

//2.
// // JOGO FUTEBOL
const jogo = {
    nome:prompt("Qual o seu nome completo?"),
    tipo:prompt("Qual o tipo do jogo?Internacional(IN)ou Doméstico(DO)"),
    etapa:prompt("Qual a etapa do jogo? (SF, DT ou FI)"),
    categoria:Number(prompt("Qual a categoria?")),
    quantidade:Number(prompt("Quantos ingressos você irá comprar?"))
}
  
function imprimirRecibo (){
    if(jogo.tipo === "DO"){
        console.log(`---Dados da compra--- 
        Nome do cliente:${jogo.nome}
        Tipo do jogo: ${jogo.tipo} 
        Etapa do jogo:  ${jogo.etapa} 
        Categoria: ${jogo.categoria} 
        Quantidade de Ingressos: ${jogo.quantidade} ingressos`)
        if(jogo.etapa === "SF"){
            if(jogo.categoria === 1){
                console.log("Valor total dos ingressos: R$", 1332 * jogo.quantidade)
            } else if (jogo.categoria === 2){
                console.log("Valor total dos ingressos: R$", 880 * jogo.quantidade)
            } else if(jogo.categoria === 3){
                console.log("Valor total dos ingressos: R$", 550 * jogo.quantidade)
            } else {
                console.log("Valor total dos ingressos: R$", 220 * jogo.quantidade) 
            }

            }else if(jogo.etapa === "DT"){
            if(jogo.categoria === 1){
                console.log("Valor total dos ingressos: R$", 660 * jogo.quantidade)
            } else if (jogo.categoria === 2){
                console.log("Valor total dos ingressos: R$", 440 * jogo.quantidade)
            } else if(jogo.categoria === 3){
                console.log("Valor total dos ingressos: R$", 330 * jogo.quantidade)
            } else {
                console.log("Valor total dos ingressos: R$", 170 * jogo.quantidade) 
            }

            }else {
                if(jogo.categoria === 1){
                    console.log("Valor total dos ingressos: R$", 1980 * jogo.quantidade)
                } else if (jogo.categoria === 2){
                    console.log("Valor total dos ingressos: R$", 1320 * jogo.quantidade)
                } else if(jogo.categoria === 3){
                    console.log("Valor total dos ingressos: R$", 880 * jogo.quantidade)
                } else {
                    console.log("Valor total dos ingressos: R$", 330 * jogo.quantidade) 
                }
                } 
    }else {
        console.log(`---Dados da compra--- 
        Nome do cliente:${jogo.nome}
        Tipo do jogo: ${jogo.tipo} 
        Etapa do jogo:  ${jogo.etapa} 
        Categoria: ${jogo.categoria} 
        Quantidade de Ingressos: ${jogo.quantidade} ingressos`)
        if(jogo.etapa === "SF"){
            if(jogo.categoria === 1){
                console.log("Valor total dos ingressos: U$", (1332 * jogo.quantidade) * 4.10)
            } else if (jogo.categoria === 2){
                console.log("Valor total dos ingressos: U$", (880 * jogo.quantidade) * 4.10)
            } else if(jogo.categoria === 3){
                console.log("Valor total dos ingressos: U$", (550 * jogo.quantidade) * 4.10)
            } else {
                console.log("Valor total dos ingressos: U$", (220 * jogo.quantidade) * 4.10) 
            }

            }else if(jogo.etapa === "DT"){
            if(jogo.categoria === 1){
                console.log("Valor total dos ingressos: U$", (660 * jogo.quantidade) * 4.10)
            } else if (jogo.categoria === 2){
                console.log("Valor total dos ingressos: U$", (440 * jogo.quantidade) * 4.10)
            } else if(jogo.categoria === 3){
                console.log("Valor total dos ingressos: U$", (330 * jogo.quantidade) * 4.10)
            } else {
                console.log("Valor total dos ingressos: U$", (170 * jogo.quantidade) * 4.10)
            }

            }else {
            if(jogo.categoria === 1){
                console.log("Valor total dos ingressos: U$", (1980 * jogo.quantidade) * 4.10)
            } else if (jogo.categoria === 2){
                console.log("Valor total dos ingressos: U$", (1320 * jogo.quantidade) * 4.10)
            } else if(jogo.categoria === 3){
                console.log("Valor total dos ingressos: U$", (880 * jogo.quantidade) * 4.10)
            } else {
                console.log("Valor total dos ingressos: U$", (330 * jogo.quantidade)  * 4.10)
            } 
        }
    }    
}
  
  imprimirRecibo()
