import express, { Request, Response } from 'express'
import { AddressInfo } from 'net';
import connection from "./connection";

const app = express();
app.use(express.json());

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

//Lista => não funcionou
// app.get("/actor", async (req: Request, res: Response) => {
//     try {
//         const actorList = async (): Promise<any> => {
//             const list = await connection.raw(`
//               SELECT * FROM Actor 
//             `)
//             return list
//         }
//         res.status(200).send(actorList)
//     } catch (error: any) {
//         res.status(400).send({
//             message: error.message,
//         });
//     }
// });

// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001"))
// })()


// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id

//         console.log(await getActorById(id))

//         res.end()
//     } catch (error: any) {
//         console.log(error.message)
//         res.status(500).send("Erro inesperado!")
//     }
// })

//EXERCÍCIO 1 B)
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

//1 C)

const getCountByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    const count = result[0][0].count;
    return count
}

//EXERCICIO 2

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

//A)
const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};
//B)
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
};
//C)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};

//Exercício 3
//A)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});
//B)
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await getCountByGender(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

//Exercício 4
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.salary
        );

        res.status(200).send();
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

//A)
app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary);
        res.status(200).send({
            message: "Success",
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

//B)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});