import { BaseDatabase } from "./BaseDatabase";
import { Product } from "../model/Product";

export class ProductDatabase extends BaseDatabase {

  private static TABLE_NAME = "amaro_products";

  public async createproduct(
    id: string,
    name: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
        })
        .into(ProductDatabase.TABLE_NAME);
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<Product> {
    const result = await this.getConnection()
      .select("*")
      .from(ProductDatabase.TABLE_NAME)
      .where({ email });

    return Product.toProductModel(result[0]);
  }

}
