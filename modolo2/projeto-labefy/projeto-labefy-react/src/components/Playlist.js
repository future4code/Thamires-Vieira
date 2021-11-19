import React, { useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusicas from "./AdicionarMusicas";

const CardPlaylist = styled.div`
    border: 1px solid gray;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const Botao = styled.button`
cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`

export default class Playlist extends React.Component {

    state = {
        playlists: [],
        titulo: "Suas Playlists:",
        paginaAtual: "playlist",
        id: "",
        name: ""
    };

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            }
        ).then((res) => {
            console.log(res.data)
            this.setState({ playlists: res.data.result.list })
        }).catch((err) => {
            console.log(err.reponse.data)
            alert("Falha ao encontrar a Playlist")
        })
    }

    escolheTela = () => {
        switch (this.state.paginaAtual) {
            case "addMusicas":
                return <AddMusicas irParaMusicas={this.irParaMusicas} />
            default:
                return <div>ERROR 404! Not Found!</div>
        }
    }

    irParaMusicas = () => {
        this.setState({ telaAtual: "musicas" }) 
    }

    getPlaylists = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "thamires-lippelt-carver"
                    }
                })
            .then((response) => {
                this.setState({ playlists: response.data.result.list });
                // console.log(response);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    deletarPlaylist = (listId) => {
        if (window.confirm("Você tem certeza que deseja deletar esta Playlist?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`,
                    {
                        headers: {
                            Authorization: "thamires-lippelt-carver"
                        }
                    })
                .then(() => {
                    alert("Playlist deletada!");
                    this.getPlaylists();
                })
                .catch((erro) => {
                    alert("Erro ao deletar Playlist");
                    console.log(erro.message);
                });
        }
    }



    render() {
        console.log(this.state.playlists)
        const listaDePlaylist = this.state.playlists.map((list) => {
            return (
                <CardPlaylist key={list.id}>
                    {list.name}
                    <Botao onClick={this.irParaMusicas}>...</Botao>
                    <Botao onClick={() => this.deletarPlaylist(list.id)}>Deletar</Botao>
                </CardPlaylist>
            )
        })

        return (
            <div>
                <Botao onClick={this.props.irParaCriar}>Voltar</Botao>
                <h2>{this.state.titulo}</h2>
                <h4>{listaDePlaylist}</h4>
                <AddMusicas></AddMusicas>
            </div>
        )
    }
}