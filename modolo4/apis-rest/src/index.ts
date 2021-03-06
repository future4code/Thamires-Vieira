import express, { Request, request, Response } from "express";

import { AddressInfo } from "net";


const app = express();

app.use(express.json());

enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
  }
  
  type User = {
    id: number,
    name: string,
    email: string,
    type: USER_ROLES,
    age: number
  }
  
  let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_ROLES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_ROLES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_ROLES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_ROLES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_ROLES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_ROLES.ADMIN,
        age: 60
    }
  ]
  
  app.get("/users", (req: Request, res: Response) => {
    try {
      let type = req.query.type as string
      let search = req.query.search as string
  
      if (type) {
        type = type.toUpperCase()
  
        if (type in USER_ROLES) {
          const result = users.filter(user => user.type === type)
          return res.status(200).send(result)
        }
  
        throw new Error("Invalid type")
      }
  
      if (search) {
        search = search.toLowerCase()
  
        const result = users.filter(
          user => user.name.toLowerCase().includes(search)
        )
  
        console.log(result, search)
  
        if (result.length === 0) {
          return res.status(204).send("No user was found")
        }
        
        return res.status(200).send(result)
      }
  
      res.status(200).send(users)
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  
  app.post("/users", (req: Request, res: Response) => {
    try {
      const { name, email, age } = req.body
      let type = req.body.type as string
      
      if (!name || !email || !age || !type) {
        throw new Error("Missing data in body to create user")
      }
  
      if (typeof name !== "string") {
        throw new Error("Invalid name")
      }
  
      if (typeof email !== "string") {
        throw new Error("Invalid email")
      }
  
      if (typeof age !== "number") {
        throw new Error("Invalid age")
      }
  
      type = type.toUpperCase()
      if (!(type in USER_ROLES)) {
        throw new Error("Invalid type")
      }
  
      users.forEach(user => {
        if (user.email === email) {
          throw new Error("Email already exists")
        }
      })
  
      const newUser: User = {
        id: users.length + 1,
        name,
        email,
        age,
        type: type === USER_ROLES.NORMAL
          ? USER_ROLES.NORMAL
          : USER_ROLES.ADMIN
      }
  
      users.push(newUser)
  
      res.status(200).send({
        message: "user created successfuly",
        user: newUser
      })
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  
  app.put("/users/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-ALTERADO"
          return res.status(200).end()
        }
      })
      res.status(204).send("User not found")
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  
  app.patch("/users/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-REALTERADO"
          return res.status(200).end()
        }
      })
      res.status(204).send("User not found")
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  
  app.delete("/users/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users.splice(i, 1)
          return res.status(200).end()
        }
      }
  
      res.status(204).send("User not found")
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  })
  

// 1
// a. Qual m??todo HTTP voc?? deve utilizar para isso?
//   GET
// b. Como voc?? indicaria a **entidade** que est?? sendo manipulada?
//   users ("/users") ou user ("/user")


// 2
// a. Como voc?? passou os par??metros de type para a requisi????o? Por qu???
//   Via query params, pq ?? opcional pass??-los
// b. Voc?? consegue pensar em um jeito de garantir que apenas `types` v??lidos sejam utilizados?
//   Sim, fazendo a valida????o


// 3
// a. Qual ?? o tipo de envio de par??metro que costuma ser utilizado por aqui?
//   Query params


// 4
// a. Mude o m??todo do endpoint para `PUT`. O que mudou?
//   A funcionalidade n??o mudou porque quem dita o que ocorre ?? o c??digo no handler, 
//o que muda ?? a sem??ntica do verbo/m??todo na documenta????o da API e se ela segue os padr??es estabelecidos pela comunidade
// b. Voc?? considera o m??todo `PUT` apropriado para esta transa????o? Por qu???
//   N??o, porque a conven????o dita que novos itens em entidades sejam aplicados pelo POST, enquanto PUT e PATCH sejam utilizados
// para edi????o completa e parcial, respectivamente




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;