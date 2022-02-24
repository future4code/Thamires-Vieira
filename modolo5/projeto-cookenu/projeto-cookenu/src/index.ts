import app from "./app"
import { getUserProfile } from "./enpoints/getProfile"
import { login } from "./enpoints/login"
import { signup } from "./enpoints/signup"



app.get("/user/profile", getUserProfile) 
// app.get("/user/profile", getOwnProfile)
// app.get("/user/:id", getUserProfile)
// app.get("/recipe/:id", getRecipe)
// app.get("/user/feed", getUserFeed)

app.post("/signup", signup)
app.post("/login", login)
// app.post("/recipe", createRecipe)
// app.post("/user/follow", followUser)
// app.post("/user/unfollow", unfollowUser)

 
