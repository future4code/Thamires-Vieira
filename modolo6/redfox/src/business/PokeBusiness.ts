import { PokeDatabase } from "../data/PokeDatabase";
import { Pokemon } from "../model/Pokemon";


export class PokeBusiness {
    static getPokeById(arg0: string) {
        throw new Error("Method not implemented.");
    }
    static getAllPoke(poke: string) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private pokeDatabase: PokeDatabase,
    ) {

    }
    public async getAllPoke(poke: string) {
        try {

            const pokemons = await this.pokeDatabase.getAllPoke(poke);

            if (!pokemons || pokemons.length === 0) {

                throw new Error("Erro ao retornar lista de pokemons");
            }

            return (pokemons);
        } catch (error) {

            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Ocorreu um erro ao retornar os pokemons")
            }
        }
    }

    getPokeById = async (id: string): Promise<Pokemon> => {
        try {
            if (!id) { throw new Error("Prencha o ID do Pokemon") }

            const getPoke: Pokemon = await new PokeDatabase().selectPokeById(id)
            return getPoke

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Ocorreu um erro.")
            }
        }
    }
}