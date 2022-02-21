import app from "./app"
// import editUser from './endpoints/editUser'
// import createUser from './endpoints/createUser'
import signUp from "./endpoints/signUp"
import { getUserByEmail } from "./endpoints/getUserByEmail"
import login from "./endpoints/login"
import { getUserProfile } from "./endpoints/getUserProfile"

// app.post('/user', createUser)
// app.put('/user/edit/:id', editUser)
app.get('/user/email', getUserByEmail)
app.get('/user/profile', getUserProfile)
app.post('/user/signup', signUp)
app.post ('/user/login', login)