import { ProductDatabase } from "../data/ProductDatabase";
import { Product, Tags } from "../model/Product";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {

    createProduct = async (
        name: string,
        tags: string
    ): Promise<void> => {

        if (!name || !tags) {
            throw new Error("Preencha todos os campos")
        }

        const tagsToDB: string = JSON.stringify(tags)

        const idGenerator = new IdGenerator()
        const productId = idGenerator.generate()
        const tagsId = idGenerator.generate()

        const newProduct = new Product(productId, name)

        const newTags = new Tags(tagsId, tagsToDB, productId)

        await new ProductDatabase().createProduct(newProduct, newTags)
    }

    getSearchProduct = async (
        query: string
    ) => {
        
        const product = await new ProductDatabase().getSearchProduct(query)


        return product
    }

}