import { Request, Response } from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { BaseDatabase } from "../data/BaseDatabase";


export class PokeController {
    async addPoke(req: Request, res: Response) {
        try {

            const body = {
                name: req.body.name,
                pokedex_number: req.body.pokedex_number,
                generation: req.body.generation,
                evolution_stage: req.body.evolution_stage,
                type: req.body.type,
                atack: req.body.atack,
                defense: req.body.defense
            }

            const pokeBusiness = new PokeBusiness();
            


        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}