import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../entities/User"


export interface AuthenticationData {
  id: string,
  role: USER_ROLES
}

//gera o token
export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.ACCES_TOKEN_EXPIRES_IN
    })
    return token
  }
//verifica se o token é válido
  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string)
    return data as AuthenticationData
  }
} 