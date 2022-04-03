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

  getSearchProduct = async (
    query: string
) => {

    const result = await this.getConnection()
        .select(`${this.table_name.products}.id`)
        .select(`${this.table_name.products}.name`)
        .select(`${this.table_name.tags}.tags`)
        .from(this.table_name.products)
        .leftJoin(this.table_name.tags, "products.id", "tags.product_id")
        .where("tags.tags", `%${query}%`)
        .orWhere({ "products.id": query })
        .orWhere({ "products.name": query })

    return result
}


}
