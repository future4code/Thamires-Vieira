// Array de produtos

export type Produto = {
    id: string,
    name: string,
    price: number
}

export const produtos: Produto[] = [
    {
        id: "1",
        name: "Agenda 2057",
        price: 50
    },
    {
        id: "2",
        name: "Caneta que apaga caneta",
        price: 25
    },
    {
        id: "3",
        name: "Borracha que apaga os pecados",
        price: 500
    },
    {
        id: "4",
        name: "Caderno mágico",
        price: 200
    },
    {
        id: "5",
        name: "Lápis que não risca",
        price: 150
    },
    {
        id: "6",
        name: "Estojo que cabe tudo",
        price: 700
    },
    {
        id: "7",
        name: "Mochila que não cabe nada",
        price: 5
    },
    {
        id: "8",
        name: "Fichário com lembranças da vida",
        price: 70
    },
    {
        id: "9",
        name: "Livro com todas as matérias que você quiser",
        price: 350
    },
    {
        id: "10",
        name: "Planner do ano passado",
        price: 35
    },
]