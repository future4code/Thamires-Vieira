import { Request, Response } from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { BaseDatabase } from "../data/BaseDatabase";


export class PokeController {
    async addPoke(req: Request, res: Response) {
        try {

            const body = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const pokeBusiness = new PokeBusiness();
            


        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}