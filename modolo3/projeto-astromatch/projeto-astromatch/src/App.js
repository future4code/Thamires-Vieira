import Main from "./components/Main/Main";
import ResetButton from "./components/ResetButton/ResetButton";
import styled from "styled-components";

const GlobalStyle = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <GlobalStyle>
      <Main/>
      <ResetButton />
    </GlobalStyle>
  );
}

export default App;
