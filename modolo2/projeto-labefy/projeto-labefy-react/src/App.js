import React from "react"
import AddMusics from "./components/AddMusics";
import Playlist from "./components/Playlist"

class App extends React.Component {

  estado = {
    telaAtual: "add musicas"
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "add musicas":
        return <AddMusics irParaAddMusics={this.irParaAddMusics} />
      case "playlist":
        return <Playlist irParaPlaylist={irParaPlaylist} />
      default:
        return <div> ERROR 404! Página não encontrada! </div>

    }
  }

  irParaAddMusics =() =>{
    this.setState({telaAtual:"add musicas"})
  }

  irParaPlaylist =() =>{
    this.setState({telaAtual:"playlist"})
  }


  render() {

    return (
      <div>
        {this.escolheTela()}

      </div>
    )
  }
}


export default App;
