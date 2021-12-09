import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/url'
// import { login } from "../../services/requests"


const LoginPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const goToHomePage = (history) => {
        history.push("/")
    }

    const onSubmitLogin = () => {
        const body = {
            "email": email,
            "password": password
        };

        axios.post(`${BASE_URL}login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list")
            })
            .catch((err) => {
                alert("Email ou senha incorretos!")
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </form>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button type={"submit"} onClick={onSubmitLogin}>Entrar</button>
        </div>
    )
}

export default LoginPage