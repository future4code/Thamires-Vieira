import React from 'react'
import { useHistory } from 'react-router-dom'
// import { login } from "../../services/requests"


const LoginPage = () => {
    const history = useHistory();

    const goToHomePage = (history) =>{
        history.push("/")
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    required
                />

                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button type={"submit"}>Entrar</button>


            </form>
        </div>
    )
}

export default LoginPage