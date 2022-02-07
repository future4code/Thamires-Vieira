// a. Qual é o tipo dessa função? Por quê?

import axios from "axios";
import { baseURL } from "./baseURL";

// b. Implemente a função solicitada

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    });
}