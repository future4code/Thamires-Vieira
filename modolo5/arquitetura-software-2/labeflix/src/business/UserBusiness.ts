import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class UserBusiness {

  async signup({ email, name, password }: any) {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hash = await hashManager.hash(password)

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password: hash
    })

    const tokenManager = new TokenManager()
    const token = tokenManager.generate({ id })

    return token
  }

  async login({ email, password }: any) {
    if (!email || !password) {
      throw new Error("Email ou senha inválidos")
    }

    const userDatabase = new UserDatabase()
    const result = await userDatabase.selectByEmail({ email })

    if (!result) {
      throw new Error("Email ou senha inválidos")
    }

    const user = new User(
      result.id,
      result.name,
      result.email,
      result.password
    )

    const hashManager = new HashManager()
    const isAuth = await hashManager.compare(password, user.getPassword())

    if (!isAuth) {
      throw new Error("Email ou senha inválidos")
    }

    const tokenManager = new TokenManager()
    const token = tokenManager.generate({ id: user.getId() })

    return token
  }
}
