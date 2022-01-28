import express, { Request, Response } from "express";
import { request } from "http";

import { AddressInfo } from "net";

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
//teste
app.get('/ping', (req: Request, res:Response)=>{
    res.send("Pong! 🏓")
})

//criar tipo de array de tarefas

type Tasks = {
    userId:number,
    id: number,
    title: string,
    completed: boolean
}

//criar array de tarefas

let toDo: Tasks[] = [
    {
        userId:1,
        id: 1,
        title: "estudar Typescript",
        completed: true
    },
    {
        userId:2,
        id: 2,
        title: "finalizar o projeto da semana",
        completed: true
    },
    {
        userId:3,
        id: 3,
        title: "terminar relatório mensal",
        completed: false
    },
    {
        userId:1,
        id: 4,
        title: "desevolver um programa que busque meu café",
        completed: false
    },
    {
        userId:2,
        id: 5,
        title: "debugar o bug de projeto debugação de bugs",
        completed: true
    },
    {
        userId:2,
        id: 6,
        title: "rever a lógica aplicada",
        completed: false
    },
    {
        userId:3,
        id: 7,
        title: "olhar para o nada por 5 min",
        completed: true
    },
    {
        userId:1,
        id: 8,
        title: "pedir ajuda naquele bug que não deu pra debugar",
        completed: true
    },
    {
        userId:1,
        id: 9,
        title: "tomar café",
        completed: false
    },
    {
        userId:2,
        id: 10,
        title: "ligar na claro",
        completed: false
    },
    {
        userId:3,
        id: 11,
        title: "olhar o grupo do zap",
        completed: true
    },
]

// pegar todos os afazeres completos

app.get('/completeds/:state', (req: Request, res:Response)=>{
    const state = req.params.state === 'true'
    const result = toDo.filter((task) => {
        return task.completed === state
    })
    res.status(200).send({result, message:"Lista de Tarefas"})
})

// adicionar tarefas

app.post('/create-task',(req: Request, res:Response) => {
    let task : Tasks = {
        userId: req.body.userId,
        id: Date.now(),
        title: req.body.title,
        completed: req.body.completed
    }

    console.log(task)
    toDo.push(task)
    res.status(200).send({toDo, message:"Adicionado com sucesso"})

})

//trocar status da tarefa

app.put('/tasks/:id', (req: Request, res: Response) => {
    const todoId = Number(req.params.id)
  
    for (let i = 0; i < toDo.length; i++) {
        if (toDo[i].id === todoId) {
            toDo[i].completed = !toDo[i].completed
        }
    }

    res.status(200).send({ toDo, message:"Alteração de status OK" })
})

//delatar tarefa de acordo com a id -- incompleto

app.delete("/delete/:id", (req, res) => {
    const todoId2 = Number(req.params.id)

    const index = toDo.findIndex((task) => {
        return task.id === todoId2
    })
    let newList = toDo.splice(index, 1)

    res.status(200).send({ toDo, message: 'Deletado com sucesso' })
})



//retornar tarefas de um determinado id


//URL DA DOCUMENTAÇÃO
//https://documenter.getpostman.com/view/18383315/UVe9SVdL