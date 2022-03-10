import { app } from "./app";
import UserBusiness from "./business/UserBusiness";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";

const userController = new UserController(
    new UserBusiness(
        new UserData()
    )
)

app.post("/user/signup", userController.signup)