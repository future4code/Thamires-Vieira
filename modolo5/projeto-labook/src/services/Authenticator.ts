import * as jwt from 'jsonwebtoken';
import { authenticationData } from '../model/User';
import dotenv from 'dotenv'

dotenv.config()
const expiresIn = "24min"

export class Authenticator {
    generateToken = (
        payload: authenticationData
    ): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
               expiresIn 
            }
        )
    }

    getTokenData = (
        token: string
    ): authenticationData => {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData
    }
}