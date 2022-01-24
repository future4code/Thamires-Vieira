import express from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;


app.get("/", (req, res) => {
    res.send("Hello from Express")
})

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const userList: User[] = [{
    id: 1,
    name: "Maria Chiquinha",
    phone: "11 98337-8278",
    email: "chiquinha@viladochaves.com",
    website: "www.voucontarpromeupai.com.br"
},
{
    id: 2,
    name: "Chaves Del Ocho",
    phone: "11 98337-8268",
    email: "chavinho@delocho.com",
    website: "www.ninguemtempacienciacomigo.com.br"

},
{
    id: 3,
    name: "Kiko Tesouro",
    phone: "11 94337-8268",
    email: "tesourodamamae@florinda.com",
    website: "www.vocenaovaicomaminhacara.com.br"

},
{
    id: 4,
    name: "Seu Madruga",
    phone: "11 97637-8909",
    email: "madruguinha@prerigo.com",
    website: "www.cebolasalhos.com.br"

},
{
    id: 5,
    name: "Dona Florinda",
    phone: "11 94537-8239",
    email: "florindas2girafales@gmail.com",
    website: "www.naoquerentraretomarumaxicaradecafe.com.br"

},
{
    id: 6,
    name: "Professor Giraffales",
    phone: "11 94127-8569",
    email: "linguica@gmail.com",
    website: "www.naoseriamuitoincomodo.com.br"

},
{
    id: 7,
    name: "NhoNho Barriga",
    phone: "11 97457-8741",
    email: "aimeuestomago@gmail.com",
    website: "www.aimeuestomago.com.br"

},
{
    id: 8,
    name: "Jaiminho Carteiro",
    phone: "11 7457-8979",
    email: "paranguarico@gmail.com",
    website: "www.evitandoafadiga.com.br"

},
{
    id: 9,
    name: "Dona Clotilde",
    phone: "11 97637-7171",
    email: "clotildelovesmadruga@gmail.com",
    website: "www.bruxado71.com.br"

},
{
    id: 10,
    name: "Sr. Barriga",
    phone: "11 97637-7845",
    email: "aluguesuacasa@gmail.com",
    website: "www.casasparaalugar.com.br"

},
]

app.get("/users", (req, res) => {
    res.status(200).send(userList)
})

type Post = {
    id: string
    title: string
    body: string
    userId: number
}

//preferi criar o array de posts fora do array de usuários

const posts: Post[] = [{
    id: "post1",
    title: "Procura-se emprego",
    body: "Sou bom em tudo que eu faço, mas não faço nada.",
    userId: 4
},
{
    id: "post2",
    title: "carta do prof",
    body: "hoje li uma carta muito engraçada do Prof Girafalles, na verdade pensei que era um pedido do Seu Madruga para o açougueiro!!! hahahaha",
    userId: 2
},
{
    id: "post3",
    title: "Café?",
    body: "Não gostaria de entrar para tomar uma xícara de café?",
    userId: 5
},
{
    id: "post4",
    title: "Vim lhe trazer esse humilde presente",
    body: "Não seria muito incomodo?!",
    userId: 6
},
{
    id: "post5",
    title: "Não entregarei mais cartas, venham buscar",
    body: "é que eu quero evitar a fadiga",
    userId: 8
},
{
    id: "post6",
    title: "Vim cobrar o aluguel",
    body: "Seu madruga, favor pagar ps 14 meses de aluguel, senão, RUA!!!!",
    userId: 10
},
]

app.get("/posts", (req, res) => {
    res.status(200).send(posts)
})

//Construa um endpoint que retorne os posts de um usuário em particular.
app.get('/posts/:id', (req, res) => {
    const userId = Number(req.params.id)

    if (!userId) {res.status(400).send('Erro, falta id do usuário')}

    const userPosts: Post[] = posts.filter(post => {
        if (post.userId === userId) {return post}
    })

    res.status(200).send(userPosts)
})