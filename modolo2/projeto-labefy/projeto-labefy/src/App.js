import React from "React"
import AddMusics from "./components/AddMusics";
import AddPlaylist from "./components/AddPlaylist";
import Playlists from "./components/Playlists";
import styled from "styled-components";


const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #e2eafc;
  background-repeat: repeat-y;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    telaAtual: "add Musica"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "add musica":
        return <AddMusics irParaAddMusics={this.irParaAddMusics} />
      case "add playlist":
        return <AddPlaylist irParaAddPlaylist={this.irParaAddPlaylist} />
      case "playlists":
        return <Playlists irParaPlaylists={this.irParaPlaylists} />
      default:
        return <div>Página não encontrada.</div>
    }
  }

  // irParaAddMusics = () =>{
  //   this.setState({telaAtual: "add Musica"})
  // }

  irParaAddPlaylist = () => {
    this.setState({ telaAtual: "add playlist" })
  }

  irParaPlaylists = () => {
    this.setState({ telaAtual: "playlists" })
  }

  render() {
    return (
      <Background>
          {this.escolheTela()}
          <p>oi</p>
      </Background>
    );
  }
}

export default App;
