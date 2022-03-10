import { isExpressionStatement, updateNamespaceExportDeclaration } from "typescript";
import { SignupInputDTO } from "../controller/UserController";
import UserData from "../data/UserData";

export default class UserBusiness {
    constructor(
        private userData:UserData
    ){}

    signup = async (input:SignupInputDTO) => {
        //validação dos dados
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error ("Campos inválidos")
        }

        //verificar se usuário existe
        const registeredUser = await this.userData.findByEmail(email)
        
        //criar id
        
        //criptografar a senha
        
        //gerar e retornar token
        
        //inserir usuario no banco
    }
}