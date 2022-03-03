import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from "../types/user"

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password }: User = req.body
        const id: string = Math.floor(Math.random() * 10 + 1).toString()
        console.log(id)
        
        const result = await connection("labecommerce_users")
            .insert({
                id,
                name,
                email,
                password
            })

        res.status(201).send("Usuário cadastrado com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}
