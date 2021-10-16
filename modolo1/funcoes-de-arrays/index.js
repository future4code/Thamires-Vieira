//EXERCICIO DE INTERPRETAÇÃO DE CODIGO

//1. As informações completas do objeto
// { nome: 'Amanda Rangel', apelido: 'Mandi' },
// { nome: 'Laís Petra', apelido: 'Laura' },
// { nome: 'Letícia Chijo', apelido: 'Chijo' }
//

//2. Os nomes do objeto
//[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

//3.Nomes e apelidos diferentes de Chijo
//[{ nome: 'Amanda Rangel', apelido: 'Mandi' },{ nome: 'Laís Petra', apelido: 'Laura' }]


//EXECICIOS DE ESCRITA DE CODIGO
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const nomesPets = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomesPets)
//b
const soSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
 
console.log(soSalsicha)
//c
const soPoodles = pets.filter((item) => {
    return item.raca === "Poodle"
    return soPoodles
}).map((soPoodles) => {
  return`Você ganhou um cupom de desconto de 10% para tosar o/a ${soPoodles.nome}!`
})
console.log(soPoodles)
//

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a
const nomeDosProdutos = produtos.map ((item, index, array) => {
    return item.nome
})
console.log(nomeDosProdutos)

//b NOME E PREÇO COM DESCONTO
const nomeEPrecoDesconto = produtos.map ((produtos, indice, array) =>{
    return produtos = `{nome: ${produtos.nome}, preço: ${produtos.preco - (produtos.preco * 5 / 100)}`
})
console.log(nomeEPrecoDesconto)

//c
const bebidas = produtos.filter((item, indice, array) => {
    return item.categoria === "Bebidas"
})
 
console.log(bebidas)

//d
const produtosYpe = produtos.filter((item, indice, array) => {
    return item.nome.includes("Ypê") 
}).map((produtosYpe) => {
    return`Compre ${produtosYpe.nome} por R$ ${produtosYpe.preco}`
})
 
console.log(produtosYpe)

//DESAFIOS
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const listaOrdenada = pokemons.map ((item, index, array) => {
    return item.nome
})
console.log(listaOrdenada.sort())

//
const listaSemRepetidos = pokemons.map ((item, index, array) => {
    return new Set(item.tipo)
})
console.log(listaSemRepetidos)

