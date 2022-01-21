console.log("exercicio 3")

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

console.log(posts)

// b) Observe abaixo a função buscarPostsPorAutor()
// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts
// do array de posts e faça a tipagem necessária.

// function buscarPostsPorAutor(posts:post, autorInformado:string) {
//     return posts.filter(
//         (post:post) => {
//             return post.autor === autorInformado
//         }
//     )
// }
