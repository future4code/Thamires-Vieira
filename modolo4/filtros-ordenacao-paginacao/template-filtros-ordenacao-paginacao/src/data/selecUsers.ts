import { connection } from "./connection"

 
export  async function selectUserByName(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name LIKE "%${name}%
      ORDER BY name ASC";
   `)

   return result[0]
} 


export  async function selectUserByType(type: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE type LIKE "%${type}%
       ORDER BY name ASC";
    `)

    return result[0]
} 