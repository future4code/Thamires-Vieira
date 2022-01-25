console.log("Lista de Exercícios Typescript")

//Ex 1

function returnNameDate (name: string, date: string): string {
    let newDate = date.split("/")
    return `Olá me chamo ${name}, nasci no dia ${newDate[0]} do mês ${newDate[1]} do ano de ${newDate[2]}.`

}

console.log(returnNameDate("Thamires", "12/04/1992")) 

//Ex 2

function printType (any: any): any {
    console.log("O tipo de parâmetro é:", typeof any)
}

printType("My type")

//Ex 3
// Considerando todas estas informações, crie uma função que receba todas essas informações como 
// parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um type

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    AVENTURA="aventura"
}

type movie = {
    movieName: string,
    releaseYear: number,
    movieGenre: GENERO,
    score?: number
}


function dataMovies (movie: movie ): object {
    return movie
}

console.log (dataMovies({movieName:"Harry Potter e a Pedra Filosofal", releaseYear: 2001, movieGenre: GENERO.AVENTURA, score:10}))

//Ex 4

enum SETOR {
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro"
}

type pessoa = {
    nome:string,
    salário:number,
    setor:SETOR,
    presencial:boolean
}

const funcionarios = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function imprimeFuncionariosMkt (lista: pessoa[]):object[] {
    return lista.filter((funcionario)=>{
        return funcionario.setor === SETOR.MARKETING && funcionario.presencial === true
    })

}
console.log(imprimeFuncionariosMkt(funcionarios))

//Ex 5

type users ={
    name:string,
    email:string,
    role:string
}

const usersList = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function returnUserListEmail (listEmail:users[]):string[]{
    return listEmail.filter((user)=>{
        return user.role === "admin"
    }).map((email=>{
        return email.email
    }))
}

console.log(returnUserListEmail(usersList))