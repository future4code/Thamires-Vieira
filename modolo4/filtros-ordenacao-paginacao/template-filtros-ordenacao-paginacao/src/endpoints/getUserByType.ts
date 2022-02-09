import { Request, Response } from "express"
import {selectUserByType} from '../data/selecUsers'
import { user } from "../types"


export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {

        const type= req.params.type as string

        const user = await selectUserByType(type)

        const users = user.map(toUser)

        if (!type) {
            res.statusCode = 404
            throw new Error("No type found")
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