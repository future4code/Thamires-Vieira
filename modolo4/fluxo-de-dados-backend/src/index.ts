import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { Produto, produtos } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//teste da API

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Tudo ok!")
})

//Retornar todos os produtos

app.get('/produtos', (req: Request, res: Response)=>{
    const result: Produto[] = produtos

    res.status(200).send(result)
})

//Criar um novo produto com rafatoração de erros

app.post("/produtos/add", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        
        if (price <= 0) { throw new Error(' O campo "price" deve ser maior que 0') }

        if (!name || !price) { throw new Error('Faltam um ou mais campos a serem preenchidos') }

        if (typeof (name) !== 'string') { throw new Error('O campo "name" deve ser uma string') }

        if (typeof (price) !== typeof (1)) { throw new Error('O "price" informado deve ser um número') }

        
        produtos.push({
            id: Date.now().toString(),
            name,
            price
        })
        res.status(201).send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case 'O preço deve ser maior que 0':
                res.status(422)
                break
            case 'O "price" informado deve ser um número':
                res.status(422)
                break
            case 'O campo "name" deve ser uma string':
                res.status(422)
                break
            case 'Um ou mais campos faltando':
                res.status(422)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
    
})

// Editar o preço de um produto com refatoração de erros

app.put('/editar/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (req.body.price <= 0) { throw new Error('O campo "price" deve ser maior que 0') }

        if (!req.body.price) { throw new Error('Preço não informado') }

        let econtrarProduto = false 

        produtos.forEach((prod) => {
            if (prod.id === id) {
                prod.price = req.body.price
                econtrarProduto = true
            }
        })

        if (!econtrarProduto) { throw new Error('Produto não encontrado') }

        res.status(200).send(produtos)

    } catch (error: any) {
        switch (error.message) {
            case 'Preço deve ser maior que 0':
                res.status(422)
                break
            case 'Produto não encontrado!':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

//Deletar produto com refatoração de erros

app.delete('/produtos/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id

        let encontrarProduto = false

        produtos.forEach((prod, index) => {
            if (prod.id === id) {
                produtos.splice(index, 1)
                encontrarProduto = true
            }
        })

        if (!encontrarProduto) { throw new Error('Não foi possível encontar o produto.') }


        res.status(200).send({produtos, message:"produto deletado com sucesso!"})

    } catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado':
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
})
