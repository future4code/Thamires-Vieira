## Exercício 1

a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
    Acredito ser muito mais amplo do que numração, pois na string pode ter numeros, letras e caracteres especiais.
b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}

Exercício 2
a) *Explique o código acima com as suas palavras.*
    O Código refere-se a verificação de craiação e autenticidade do usuário onde poderá ser inserido na tabela do SQL
b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*
	const userTableName = "User";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};


## Exercício 3
a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
    Reafirma que o que virá de process.evv.JWT é uma string. Precisamos para que não ocorra erro.
b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}

## Exercício 4
a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
=> criado em /signUp
b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
  if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");}
c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
 if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");}


## Exercício 5
*a) Crie uma função que retorne as informações de um usuário a partir do email*
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}

## Exercício 6
a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
=> criado em /login
b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");}


## Exercício 7
a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
    Identifica o retorno como any.
b) *Crie uma função que realize a mesma funcionalidade da função acima*
const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

## Exercício 8
a) *Comece criando uma função no data que retorne o usuário a partir do id*

b) *Crie o endpoint com as especificações passadas*
=> criado em /getUserProfile