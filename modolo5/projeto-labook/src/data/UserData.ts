import BaseDatabase from "./BaseDatabase";

type findByEmailRes = {
    id: string,
    name: string,
    eail: string,
    password: string
}[]

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "labook_users"
    
    findByEmail = async (email: string) => {
        try {
            const queryResult: findByEmailRes = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return [queryResult]
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}