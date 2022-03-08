import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "LABEFLIX_USER"
  
  async create({
    id,
    name,
    email,
    password
  }: any) {
    await this.getConnection().insert({
      id,
      name,
      email,
      password
    }).into(UserDatabase.TABLE_NAME)
  }

  async selectByEmail({ email }: any) {
    const result = await this.getConnection()
      .select()
      .from(UserDatabase.TABLE_NAME)
      .where({ email })

    return result[0]
  }
}
