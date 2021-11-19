import React from 'react';
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaUsuarios from "./components/TelaUsuarios";

class App extends React.Component {

  state = {
   telaAtual:"cadastro"
  };

  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>ERROR 404! Not Found!</div>
  
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})

  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
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
