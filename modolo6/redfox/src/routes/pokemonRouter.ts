import express from "express";
import { PokeController } from "../controller/PokeController";


export const pokeRouter = express.Router();

const pokeController = new PokeController();

pokeRouter.get("/all-poke", pokeController.getAllPoke);
