import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";

app.get("/recipes", getAllRecipes)

app.get("/users", getAllUsers)

app.get('/users/name', getUserByName)

app.get('/users/:type', getUserByType)