import * as bcryptjs from "bcryptjs"

export class HashManager {
  //signup - criptografa a senha do usuário
  public async hash(data: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcryptjs.genSalt(rounds)
    return bcryptjs.hash(data, salt)
  }
  //login - compara a senha criptografada 
  public async compare(data: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(data, hash)
  }
}