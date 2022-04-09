import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "pokemons";

  public async getAllPoke(poke:string): Promise<void|any> {
    try {
       const result = await this.getConnection()
       .select("*")
       .from(PokeDatabase.TABLE_NAME);
      

       return result[0].map((res: any) => {
       });
    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message) 
        }
    }
 }

 public selectPokeById = async(id:string): Promise<Pokemon> => {
  try {
      const result = await this.getConnection()
      .select("*")
      .from(PokeDatabase.TABLE_NAME)
      .where({id})
      return result[0]

  } catch (error: any) {
      throw new Error(error.slqMessage || error.message)
  }
}

}
