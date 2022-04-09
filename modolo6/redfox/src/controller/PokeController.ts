import { Request, Response } from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PokeDatabase } from "../data/PokeDatabase";



export class PokeController {

    getAllPoke = async (req: Request, res: Response) => {
        try {
            const poke = ""

            const result = await PokeBusiness
                .getAllPoke(poke);


            res.status(200).send(result);
        } catch (error) {

            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Erro ao coletar pokemon" })
            }
        }

        await BaseDatabase.destroyConnection();
    }

    
    getPokeById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const result = await new PokeBusiness()
                .getPokeById(id)

            res.status(200).send({ result })
        } catch (error: any) {
            res.status(400).send(error.message);
        }
        await BaseDatabase.destroyConnection();
    }
    

}