import { Request, Response } from "express";
import { connection } from "../connection";


const selectAllUsers = async (): Promise<any[]> => {
    const result = await connection("labecommerce_users")
    return result
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await selectAllUsers()

        res.status(200).send(users)

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}