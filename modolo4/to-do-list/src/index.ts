import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

//Exercício 2 - Pegar Usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    let codeError = 400

    try {
        const id: string = req.params.id

        if (!id) {
            codeError = 404
            throw new Error("Informe um id válido.")
        }

        const result = await connection("TodoList")
            .select("*")
            .where("id", id)

        if (result.length === 0) {
            codeError = 422
            throw new Error("Id não encontrado")
        }

        res.status(200).send(result)

    } catch (error: any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
})

// Exercício 1 - Criar usuário
app.post("/user", async (req: Request, res: Response): Promise<void> => {
    let codeError = 400
    try {
        const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body
        const id: string = Date.now().toString()

        if (!name || !nickname || !email) {
            codeError = 422
            throw new Error("Dados não preenchidos")
        }

        await connection("TodoList")
            .insert({
                id,
                name,
                nickname,
                email
            })

        res.status(201).send("Usuário criado com sucesso!")

    } catch (error: any) {
        res.status(codeError).send(error.message || error.sqlMessage)
    }
})

// Exercício 3 - Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> =>{
    let codeError = 400
  try {
    const id = req.params.id
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body

    if (!id) {
        codeError = 404
        throw new Error("Informe um id válido")
    }

    if (nickname === "" || name === "" || email === "") {
      codeError = 404
      throw new Error("Preecha todos os campos")
    }

    await connection("TodoList")
      .update({ name, nickname, email })
      .where("id", id)

    res.status(201).send("Alterações feitas com sucesso!")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)

  }
})