export type User = {name: string,  document: string, birthDate: string, balance: number, transactions: Transaction[] }

export type Transaction = {value: number, date: string, description: string }

export type Date = { year: number, month: number, day: number}

export const users: User[] = [
    {
        name: "Dona Florinda",
        document:"123.456.789-01",
        birthDate: "15/12/2222",
        balance: 0,
        transactions: []
    }
]