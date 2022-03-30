import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class ProductController {
    createProduct = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        try {

            const { name, tags } = req.body

            await new ProductBusiness().createProduct(name, tags)

            res.status(200).send("Produto criado com sucesso!")
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message })
            }
        }

        await BaseDatabase.destroyConnection();
    }

    
}