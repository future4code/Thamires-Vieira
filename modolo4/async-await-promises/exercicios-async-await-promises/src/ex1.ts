import axios from "axios";
import { baseURL } from "./baseURL";

// a. Qual endpoint você deve utilizar para isso?
//GET "/subscribes"

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// async function nomeDaFuncao():Promise<any[]>{}

// c. Implemente uma função nomeada que faça o que foi pedido.

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

getSubscribers().then(console.log)