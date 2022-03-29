export class Product{
    constructor(
    private id: string,
    private name: string,
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

  

    static toProductModel(product: any): Product {
        return new Product(product.id, product.name);
      }


}

export interface ProductInputDTO{
    email: string;
    password: string;
    name: string;
    role: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

