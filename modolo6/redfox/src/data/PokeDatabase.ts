import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "pokemons";

  public async addPoke(
   id: number,
   name: string,
   pokedexNumber: number,
   generation: number,
   evolution_stage: number,
   type: string,
   atack: number,
   defense: number
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          pokedexNumber,
          generation,
          evolution_stage,
          type,
          atack,
          defense
        })
        .into(PokeDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  // public async getUserByEmail(email: string): Promise<Pokemon> {
  //   const result = await this.getConnection()
  //     .select("*")
  //     .from(UserDatabase.TABLE_NAME)
  //     .where({ email });

  //   return User.toUserModel(result[0]);
  // }

}
