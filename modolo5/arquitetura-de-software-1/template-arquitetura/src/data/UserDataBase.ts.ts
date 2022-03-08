import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";


export class UserDataBase extends BaseDataBase {

    createUser = async (user: User): Promise<void> => {
        await BaseDataBase.connection('User_Arq')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
    }

    getUserbyEmail = async (email: string): Promise<User> => {
        try {
            const [user] = await BaseDataBase.connection('User_Arq')
                .select()
                .where('User_Arq.email', `${email}`)

            const newUser = user && User.toUserModel(user)
            return newUser

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    getUsers = async (): Promise<User[]> => {
        try {
            const users: User[] = []
            const result = await BaseDataBase.connection('User_Arq')
                .select()

            for (let user of result) {
                users.push(user)
            }

            return users

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    
    getUserbyId = async (id: string): Promise<User> => {
        try {
            const [user] = await BaseDataBase.connection('User_Arq')
                .select()
                .where('User_Arq.id', `${id}`)

            const newUser = user && User.toUserModel(user)
            return newUser

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }

}