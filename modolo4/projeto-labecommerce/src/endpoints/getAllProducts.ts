import { Request, Response } from "express"
import {connection} from "../connection"
import { Product } from "../types/product"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {

    try {
        const result: Product[] = await connection('labecommerce_products').select('*')

        res.status(200).send({ products: result })

    } catch (error: any) {

        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}