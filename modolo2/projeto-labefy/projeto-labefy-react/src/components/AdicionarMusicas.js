import React from "react";
import axios from "axios";
import styled from "styled-components"

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

export default class AddMusicas extends React.Component {

    state = {
        detalhesPlaylist: [],
        name: "",
        artist: "",
        url: ""
    };
    componentDidMount() {
        this.pegarDetalhesPlaylist();
    }

    pegarDetalhesPlaylist = (id) => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            })
            .then((response) => {
                this.setState({detalhesPlaylist:response.data.result.tracks});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    addNome = (event) => {
        const nomeDaMusica = event.target.value;
        this.setState({name: nomeDaMusica});
    };

    addArtista = (event) => {
        const nomeDoArtista = event.target.value;
        this.setState({artist: nomeDoArtista});
    };

    urlDaMusica = (event) => {
        const novaUrl = event.target.value;
        this.setState({url: novaUrl});
    };

    addNaPlaylist = (listId) => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        };

        axios
            .post(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
                body, {
                headers: {
                    Authorization: "thamires-lippelt-carver"
                }
            })
            .then((response) => {
                this.setState({name:"", artist:"", url:""});
                this.pegarDetalhesPlaylist();
                alert("Musica adicionada");
                console.log(response);
            })
            .catch((error) => {
                alert("Erro ao adicionar música. Verifique se as informações estão corretas.");
                console.log(error.message);
            });
    };

    render() {
        const detalhes = this.state.detalhesPlaylist.map((playlist) => {
            return (
                <div key={playlist.id}
                    name={playlist.name}
                    artist={playlist.artist}
                    url={playlist.url}
                />

            )
        });
        return (
            <div>
                <p>{detalhes}</p>
                <p>Adicione mais músicas a Playlist:</p>
                <input
                    placeholder="Nome da música"
                    type="text"
                    value={this.state.name}
                    onChange={this.addNome}
                />
                <input
                    placeholder="Nome do Artista"
                    type="text"
                    value={this.state.artist}
                    onChange={this.addArtista}
                />
                <input
                    placeholder="Endereço"
                    type="text"
                    value={this.state.url}
                    onChange={this.urlDaMusica}
                />
                <Botao onClick={this.addNaPlaylist}>Adicionar</Botao>
            </div>)
    }
}

