import { Request, Response } from "express"
import {selectUserByName} from "../data/selecUsers"

import { user } from "../types"


export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {

        const name = req.query.name as string

        const user = await selectUserByName(name)

        const users = user.map(toUser)

        if (!user.length) {
            res.statusCode = 404
            throw new Error("No user found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toUser = (input: any): user =>{
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password,
        recipes: input.recipe
    }

} 