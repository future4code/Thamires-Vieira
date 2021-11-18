import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    pegarNome = (e) => {
        this.setState({ nome: e.target.value })
    }

    pegarEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    cadastrar = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(
            " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            }
        )
            .then((res) => {
                console.log(res.data)
                alert("Usuário cadastrado com sucesso!")
                this.setState({nome:"", email:""})
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("ERRO! Não foi possível cadastrar esse usuário.")
            });

    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Listas</button>
                <h2>Cadastro de Usuários</h2>
                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.pegarNome}
                />
                <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.pegarEmail}
                />
                <button onClick={this.cadastrar}>Cadastrar</button>

            </div>
        )
    }
}