import { app } from "./app"
import { getUserProfile } from "./enpoints/getProfile"
import { login } from "./enpoints/login"
import { signup } from "./enpoints/signup"



app.get("/user/profile", getUserProfile) 

app.post("/signup", signup)
app.post("/login", login)


 
