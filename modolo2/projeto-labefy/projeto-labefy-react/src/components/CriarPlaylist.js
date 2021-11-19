import React from "react";
import axios from "axios";
import styled from "styled-components"


const AddConteiner = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: start;
  padding: 5%;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 40px;
`;


export default class CriarPlaylist extends React.Component {

    state = {
        name: "",
    }

    pegarNome = (e) => {
        this.setState({ name: e.target.value })
    }

    cadastrar = () => {
        const body = {
            name: this.state.name,
        }

        axios.post(
            " https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            }
        )
            .then((res) => {
                console.log(res.data)
                alert("Playlist cadastrada com sucesso!")
                this.setState({ name: ""})
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("ERRO! Não foi possível cadastrar.")
            });

    }

    render() {
        return (
            <AddConteiner>
                <Title>Bem vindx ao Labefy!</Title>
                <h2>Cadastrar Playlist</h2>
                <p>Digite abaixo o nome da Playlist que deseja cadastrar:</p>
                <input
                    placeholder="Nome"
                    value={this.state.name}
                    onChange={this.pegarNome}
                />
                <button onClick={this.cadastrar}>Cadastrar</button>

                <p>Quer ver sua lista de Playlists já cadastradas? Clique no botão abaixo:</p>
                <button onClick={this.props.irParaLista}>Lista De Playlists</button>
                
            </AddConteiner>
        )
    }
}