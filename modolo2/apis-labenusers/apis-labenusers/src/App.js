import './App.css';
import axios from "axios";
import React from 'react';

class App extends React.Component {

  state = {
   nome: "",
   email: "",
   listaDeUsuarios: [],
   idUser: "",
   usuario: {}
  };

  onChangeNome = (e) => {

  };

  onChangeEmail = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onChangeId = (e) => {

  }

  createUser = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };
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
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "thamires-lippelt-carver"
        }
      }
    ).then((res) => {
      console.log(res.data)
      alert("Usuário criado com sucesso!")
    }).cath((err) => {
      console.log(err.reponse.data)
      alert("Falha ao criar usuário, tente novamente.")
    })
  };

  getUserById = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${:id}",
    {
      headers: {
        Authorization: "thamires-lippelt-carver"
      }
    }).then((res) => {
      this.setState({usuario: res.data})
    }).catch((err) =>{
      console.log(err.response)
    })
  }

  deleteUsers = () => {
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${:id}",
    {
      headers: {
        Authorization: "thamires-lippelt-carver"
      }
    }).then((res) => {
      this.setState({usuario: res.data})
    }).catch((err) =>{
      console.log(err.response)
    })
  }

  

  render() {
    // const usersList = this.state.users.map((user) => (
    //   <li key={user.id}>{user.name}</li>
    // ));

    return (
      <div className="App">
        <button>Listas</button>

        <input
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeNome}
        />
       <input
          placeholder="Email"
          value={this.state.email}
          onChange={this.onChangeEmail} />
        <button onClick={this.createUser}>Salvar</button>
        {/* <ul>{usersList}</ul> */}
      </div>
    )
  }
}


export default App;
