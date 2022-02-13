import axios from 'axios'
import { baseURL } from "./baseURL";

// a. O que o `Promise.all` faz?
//Esse método recebe um array de Promises e retorna outra
//Promise, que resolve em um array de respostas

// b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?
//Uma das grandes vantagens de usar Promise.all() é receber uma exceção mais cedo se alguma promise falhar.

// c. Reimplemente a função utilizando `Promise.all`

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);

    } catch (error: any) {
        console.log("Unexpected error");
    }
};