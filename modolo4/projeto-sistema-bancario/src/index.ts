import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { User, users } from "./data";

const app = express();

app.use(express.json());

//SISTEMA BANCÁRIO

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error: any) {
    res.status(400).send()
  }

})

app.get("users/balance",(req: Request, res: Response) => {
  let errorCode = 40

  try {
    const {name, document} = req.body
    const findUser = users.find((user)=>{user.name === req.body.name})
    const findDocument = users.find((user)=>{user.document === req.body.document}) 

    if(!findDocument){
      errorCode = 402
      throw new Error ("Erro ao encontrar: Revise o numero do documento")
    }
    if(!findUser){
      errorCode = 402
      throw new Error ("Erro ao encontrar: Revise o nome do usuário")
    }
    if(findUser && findDocument){
      res.status(200).send()
    }

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

app.post("/users/create-account", (req: Request, res: Response) => {
  let codeError = 400
  const token = req.headers.authorization

  try {
    const { name, document, birthDate, balance } = req.body
    let atualYear: number = 2022
    let convertDate = birthDate.split('/')
    let age = atualYear - convertDate[2]
    const sameDocument = users.find((user)=>{user.document === req.body.document}) 

    if (!token) {
      codeError = 401
      throw new Error("Operação não autorizada: necessário token de autorização");
    }
    if (!name && !document && !birthDate) {
      codeError = 404
      throw new Error("Erro ao cadastrar: Verifice todos os dados informados")
    }

    if (sameDocument){
      codeError = 422
      throw new Error("Já existe uma conta com esse número de documento")
    }

    if (age >= 18) {
      users.push({
        name,
        document,
        birthDate,
        balance,
        transactions: []
      })
      res.status(201).send({message: 'Usuário criado com sucesso!', users})
    } else {
      codeError = 422
      throw new Error("Necessário ter no mínimo 18 anos para abrir uma conta.");
  }

    } catch (error: any) {
      res.status(codeError).send({ message: error.message })
    }

  })

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});