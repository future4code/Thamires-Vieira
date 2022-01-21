import { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
  body {
  background-image: url('https://img.elo7.com.br/product/original/1E349C7/papel-de-parede-3d-universo-0007-papel-de-parede-autocolante.jpg');
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  margin: 100px;
  }

  button {
    margin-bottom: 15px;
    margin-right: 50px;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: slategray;
    min-width: 100px;

    &:hover{
      cursor: pointer;
      background-color: #b6d4e3;
    }
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
  }

  h1, h2, b {
    color: white;
  }

  h1 {
    text-align: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h2 {
    text-align: center;

    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p {
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle