import { Request, Response } from "express";
import {  UserBusinness } from "../business/UserBusiness";
import { USER_ROLES } from "../types/types";

const userBusinness = new UserBusinness()

export class UserController {

    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role }: { name: string, email: string, password: string, role: USER_ROLES } = req.body

            const token = await userBusinness.signup(name, email, password, role)

            res.status(201).send({ message: "Usuário cadastrado com sucesso!", token })

        } catch (error: any) {
            switch (error.message) {
                case "informe os campos name, email, password e role corretamente":
                    res.statusCode = 422
                    break
                case "Formato de email inválido":
                    res.statusCode = 422
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password }: { email: string, password: string } = req.body
            const token = await userBusinness.login(email, password)

            res.status(200).send({ message: "Usuário logado", token })

        } catch (error: any) {
            res.send(error.message)
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const users = await userBusinness.getAllUsers(token)

            res.status(200).send(users)

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar essa operação é necessário ter token de autorização.":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            await userBusinness.deleteUser(token, id)

            res.status(200).send({message: "Usuário deletado com sucesso!"})

        } catch (error: any) {
            switch (error.message) {
                case "Para realizar essa operação é necessário ter token de autorização.":
                    res.statusCode = 401
                    break
                case "Somente usuários com perfil de ADMIN podem realizar essa requisição":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }
            res.send(error.message)
        }
    }
}