import axios from "axios"
import { baseURL } from "./baseURL"

// a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
//As arrow functions permitem ter um retorno implícito, valores retornados sem ter que usar a palavar return. 

// b. Implemente a função solicitada, usando arrow function

const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

getSubscribers().then(console.log)