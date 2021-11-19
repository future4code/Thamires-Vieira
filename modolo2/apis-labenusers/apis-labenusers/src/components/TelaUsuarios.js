import React, { useReducer } from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid gray;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaUsuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            }
        ).then((res) => {
            console.log(res.data)
            this.setState({ usuarios: res.data })
        }).catch((err) => {
            console.log(err.reponse.data)
            alert("Falha ao encontrar a lista de usuários")
        })
    }

    deletarUsuarios = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            })
            .then((res) => {
                this.setState({ usuario: res.data })
                alert("Usuário deletado")
                this.pegarUsuarios()
            })
            .catch((err) => {
                console.log(err.response)
                alert("Erro. Não foi posspivel deletar o usuário")
            })
    }

    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return (
                <CardUsuario key={usuario.id}>
                    {usuario.name}
                    <button onClick={()=> this.deletarUsuarios(usuario.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Voltar</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}