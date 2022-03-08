import { UserDataBase } from "../data/UserDataBase.ts";
import { User } from "../entities/User";
import { Authentication } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { GenerateId } from "../services/idGenerator";
import { USER_ROLES } from "../types/types";

const userDataBase = new UserDataBase()
const generateId = GenerateId()
const authentication = new Authentication()
const hashManager = new HashManager()

export class UserBusinness {

    signup = async (name: string, email: string, password: string, role: USER_ROLES): Promise<string> => {

        if (!name || !email || !password || !role) {
            throw new Error('Preencha os campos "name", "email" e "password"')
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido");
        }

        if (password.length < 6) {
            throw new Error("Password deve ter 6 caracteres");
        }

        const id: string = generateId

        const encryptedPassword = await hashManager.genareHash(password)

        const newUser = new User(id, name, email, encryptedPassword, role)

        await userDataBase.createUser(newUser)

        const token = authentication.generateToken({ id, role })

        return token
    }

    login = async (email: string, password: string): Promise<string> => {

        if (!email || !password) {
            throw new Error("Para realizar login é necessário informar os seguintes campos:  email, password.")
        }

        const user = await userDataBase.getUserbyEmail(email)

        if (!user) {
            throw new Error("Esse usuáro não encontrado")
        }

        const passwordIsCorrect: boolean = user && await hashManager.compareHash(password, user.getPassword())

        if (!password || !passwordIsCorrect) {
            throw new Error("Password inválido.")
        }

        const token = authentication.generateToken({ id: user.getId(), role: user.getRole() })
        return token
    }

    getAllUsers = async (token: string): Promise<any[]> => {

        if (!token) {
            throw new Error("Para realizar essa operação é necessário ter token de autorização.")
        }

        authentication.getTokenData(token)

        const users = await userDataBase.getUsers()

        return users
    }
}