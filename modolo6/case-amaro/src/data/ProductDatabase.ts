import { BaseDatabase } from "./BaseDatabase";
import { Product, Tags } from "../model/Product";

export class ProductDatabase extends BaseDatabase {
  protected table_name = {
    products: "products",
    tags: "tags"
  }
  createProduct = async (
    product: Product,
    tags: Tags
  ): Promise<void> => {

    try {
      await this.getConnection()
        .insert(product)
        .into(this.table_name.products)

      await this.getConnection()
        .insert(tags)
        .into(this.table_name.tags)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error( error.message)
      }
    }
  }

}
