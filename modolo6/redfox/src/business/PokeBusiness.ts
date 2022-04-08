import { PokeDatabase } from "../data/PokeDatabase";


export class PokeBusiness {
    constructor(
        private pokeDatabase: PokeDatabase,
    ) {

    }
    public async getAllPoke(test: string) {
        try {

            const pokemons = await this.pokeDatabase.getAllPoke(test);

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
}
