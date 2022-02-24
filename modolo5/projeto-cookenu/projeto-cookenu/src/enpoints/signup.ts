import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password, role } = req.body
        const verifyEmail = email.includes("@")

        if (!name || !email || !password || !role) {
            res.status(422).send("Insira as informações de 'name', 'email', 'password' e 'role'")
        }

        if (!verifyEmail || !email) throw new Error("Informe um email válido")

        if (password.length <= 6 || !password) throw new Error("Informe uma senha com mais de 6 caracteres ou uma senha válida")

        const userDataBase = new UserDatabase()
        const user = userDataBase.findUserByEmail(email)

        if (await user) {
            res.status(409).send('Email já cadastrado')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        
        const newUser = new User(id, name, email, hashPassword, role)
        await userDataBase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})
       
        res.status(200).send({message:'Usuário criado com sucesso', token})
    
    } catch (error: any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
} 