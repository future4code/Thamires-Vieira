import User from "../model/User";
import BaseDatabase from "./BaseDatabase";

type findByEmailRes = {
    id: string,
    name: string,
    eail: string,
    password: string
}[]

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_users"

    insert = async (user: User) => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error: any) {
            throw new Error("Erro ao inserir usuário no banco de dados")
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: findByEmailRes = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return queryResult[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}