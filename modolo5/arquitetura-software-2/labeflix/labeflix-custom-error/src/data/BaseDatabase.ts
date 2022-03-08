import knex from 'knex'
import Knex from 'knex'

export abstract class BaseDatabase {

  private static connection: Knex | null

  protected getConnection(): Knex {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DATABASE_HOST,
          port: 3306,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
        }
      })
    }

    return BaseDatabase.connection
  }

}
