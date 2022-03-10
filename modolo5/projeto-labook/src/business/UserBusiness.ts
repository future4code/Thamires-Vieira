import { SignupInputDTO } from "../controller/UserController";
import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    signup = async (input:SignupInputDTO) => {
        //validação dos dados
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error ("Campos inválidos")
        }

        //verificar se usuário existe
        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser){
            throw new Error ("Email já cadastrado")
        }

        //criar id
        const id = this.idGenerator.generateId()

        //criptografar a senha
        const hashedPassword = await this.hashManager.hash(password)
        
        //gerar e retornar token
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        // console.log(user)
        await this.userData.insert(user)
       
        //inserir usuario no banco
        const token = this.authenticator.generateToken({id})
        return token
    }
}