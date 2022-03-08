import { Request, Response } from "express";

import { UserBusiness } from "../business/UserBusiness";

export class UserController {

  async signup(req: Request, res: Response) {
    try {
      const { email, name, password } = req.body

      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup({ email, name, password })

      res.send({
        message: "Usuário cadastrado com sucesso",
        token
      })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login({ email, password })

      res.send({
        message: "Usuário logado com sucesso",
        token
      })
    } catch (error) {
      res.status(error.code || 400).send(error.message)
    }
  }
}
