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

    fetchPlaylists = () => {
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
                    this.fetchPlaylists();
                })
                .catch((erro) => {
                    alert("Erro ao deletar Playlist");
                    console.log(erro.message);
                });
        }
    }

    mudarParaMusicas = (listId) => {
        if (this.state.paginaAtual === "playlists") {
            this.setState({
                paginaAtual: "adicionarMusicas",
                listId: listId
            });
        } else {
            this.setState({paginaAtual:"playlists",listId: ""});
        }
    };

    render() {
        console.log(this.state.playlists)
        const listaDePlaylist = this.state.playlists.map((list) => {
            return (
                <CardPlaylist key={list.id}>
                    {list.name}
                    <button onClick={() => this.deletarPlaylist(list.id)}>X</button>
                </CardPlaylist>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCriar}>Voltar</button>
                <h2>{this.state.titulo}</h2>
                {listaDePlaylist}
                <AddMusicas listId={this.state.id} mudarParaMusicas={this.mudarParaMusicas} />
            </div>
        )
    }
}