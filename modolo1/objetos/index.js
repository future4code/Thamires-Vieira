// Exercícios de Interpretação de Código.

//1.a)Matheus Nachtergaele
// Virginia Cavendish
//canal: Globo, horario: 14h

//2.a) {nome: 'Juca', idade: 3, raca: 'SRD'}
//{nome: 'Juba', idade: 3 , raça: 'SRD'}
//{nome: 'Jubo', idade: 3 , raça: 'SRD'}
//b) a sintaxe dos "..." significa espelhamento ou spread que tem a função de copiar as propriedade do objeto ou array.

//3.a)false
//undefined - não foi definido altura.
//b)não foi definido nenhuma propriedade altura, dentro do objeto.

// Exercícios de Escrita de Código.
// 1.a)
const pessoa = {
    nome:'Thamires',
    apelidos:['Thami', 'Tham', 'Thá']
    
}
function imprimirNome(pessoa){
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
}
console.log(imprimirNome(pessoa))

//b)
const novaPessoa = {
    ...pessoa,
    apelidos:['Thamy', 'Thata', 'ThamTham']
}

console.log(imprimirNome(novaPessoa))

//2.a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
const informacoes = {
    nome: 'Thamires',
    idade: 29,
    profissao: 'Estudante'
}

const novasInformacoes = {
    nome: 'Ruy',
    idade: 28,
    profissao: 'Publicitário'
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
function retornarArray(informacoes){
    const novoArray = []
    novoArray.push(informacoes.nome, informacoes.nome.length, informacoes.idade, informacoes.profissao, informacoes.profissao.length)
    return novoArray
}
console.log(retornarArray(informacoes))

//3.a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem 
//ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
//Invoque essa função passando os três objetos criados.
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

const carrinho = []

const frutasA = {
    nome: 'Melão',
    disponibilidade: true
}

const frutasB = {
    nome:'Uva',
    disponibilidade: true
}

const frutasC = {
    nome:'Morango',
    disponibilidade: true
}

function adicionarFrutas(frutasA, frutasB, frutasC){
    carrinho.push(frutasA, frutasB, frutasC)
    return carrinho
}
console.log(adicionarFrutas(frutasA, frutasB, frutasC))

//Desafios

//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
//Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**

        // // Exemplo de entrada: "Lais", 26, "Instrutora"
        // // O que deve ser impresso no console: 
        // { nome: 'Lais', profissao: "Instrutora", idade: 26}
        // "Object"
               
function perguntarAoUsuario(){
  const obj = {
    nome:prompt('Qual é o seu nome?'),
    idade:prompt('Qual é a sua idade?'),
    profissao:prompt('Qual é a sua profissao?')
    
  }  
  return obj
}
console.log(perguntarAoUsuario())
console.log(perguntarAoUsuario().typeof)


//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome.
// A função deve retornar uma mensagem no seguinte modelo:
    
    // O primeiro filme foi lançado antes do segundo? false
    // O primeiro filme foi lançado no mesmo ano do segundo? true

function filmes(){
    const filme1 ={
        ano_de_lancamento: 2021,
        nome:'Harry Potter e a Pedra Filosofal'
    }
    const filme2 ={
        ano_de_lancamento: 2021,
        nome:'Planeta dos Macacos'
    }
    
    const mensagem1 = filme1.ano_de_lancamento > filme2.ano_de_lancamento
    const mensagem2 = filme1.ano_de_lancamento === filme2.ano_de_lancamento
    return mensagem1, mensagem2
}
console.log(filmes())

//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: 
//ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

function indisponibilidade(frutasA){
    return !frutasA.disponibilidade
}
console.log(indisponibilidade(frutasA))