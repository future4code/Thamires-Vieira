import express, { Request, request, Response } from "express";

import { AddressInfo } from "net";
import { users, user } from "./data";

const app = express();

app.use(express.json());

//Exercicio 1

app.get("/users", (req: Request, res: Response) => {
    let errorCode : number= 400
 try {
    if (!users){
        errorCode
        throw new Error("Lista não encontrada")
    }
     res.status(200).send(users)
 } catch (error: any) {
     res.status(errorCode).send({message: error.message})
 }
})

//a) Qual método HTTP você deve utilizar para isso?
//R. Para pegar usuários, utilizo o método GET
//b) Como você indicaria a **entidade** que está sendo manipulada?*
// (/users)

//Exercicio 2





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;