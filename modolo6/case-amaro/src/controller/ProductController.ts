import { Request, Response } from "express";
import { ProductInputDTO, LoginInputDTO} from "../model/Product";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class ProductController {
    async signup(req: Request, res: Response) {
        try {

            const input: ProductInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const productBusiness = new ProductBusiness();
            const token = await productBusiness.createProduct(input);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new ProductBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}