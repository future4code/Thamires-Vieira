// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, 
// então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?
//R: Aparece um erro que diz:  O tipo 'number' não pode ser atríbuido ao tipo 'string'

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript 
//uma variável que aceite mais de um tipo de valor?

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
//Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as 
//cores do arco-íris. Utilize um `enum` para isso.

//a)

const myString: string = "Thamires"
console.log(myString)

const myNumber: number | string = "trinta"
console.log(myNumber)

// const person: { name: string, age: number, favoriteColor: string } = {
//     name: "Thamires",
//     age: 29,
//     favoriteColor: "Purple"
// }

// console.log(person)

type person = {
    name: string,
    age: number,
    favoriteColor: string
}

enum raibowColors {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow",
    GREEN = "Green",
    BLUE = "Blue",
    VIOLET = "Violet"
}

const thamires: person = {
    name: "Thamires",
    age: 29,
    favoriteColor: raibowColors.VIOLET
}

const ruy: person = {
    name: "Ruy",
    age: 28,
    favoriteColor: raibowColors.BLUE
}

const bella: person = {
    name: "Bella",
    age: 1,
    favoriteColor: raibowColors.YELLOW
}

console.log(thamires, ruy, bella)

