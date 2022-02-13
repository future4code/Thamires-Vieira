import { Request, Response } from "express";
import { connection } from "../connection";
import { Product } from "../types/product"

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url }: Product = req.body
        const id: string = Math.floor(Math.random() * 200 ).toString()

        const result = await connection("labecommerce_products")
        .insert({
            id,
            name,
            price,
            image_url
        })

        res.status(201).send("Produto cadastrado com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}