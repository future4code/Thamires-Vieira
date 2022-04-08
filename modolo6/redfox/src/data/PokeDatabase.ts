import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "pokemons";

  public async getAllPoke(test:string): Promise<void|any> {
    try {
       const result = await this.getConnection().select("*").from(PokeDatabase.TABLE_NAME);
      

       return result[0].map((res: any) => {
       });
    } catch (error) {
       if (error instanceof Error) {
          throw new Error(error.message) 
        }
    }
 }

}
