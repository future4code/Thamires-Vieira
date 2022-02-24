import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export async function getUserProfile(req: Request, res: Response) {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        const id = req.params.id

        if(!token){
            errorCode = 422
            throw new Error("É necessário autorização")
        }

        const authenticator = new Authenticator()
        authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const userProfile = await userDatabase.getUserById(id)

        res.status(200).send(userProfile)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
} 