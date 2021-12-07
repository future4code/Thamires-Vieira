import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
    background-image: url("../img/background.jpg");
`

const HomePage = () => {
    const history = useHistory();

    const goToListTripsPage = (history) => {
        history.push("/trips/list")
    }

    const goToLoginPage = (history) => {
        history.push("/login")
    }

    return (
        <HomeContainer>
            <h1>
                Bem-vindx à LabeX </h1>
            <h2>
                sua melhor escolha de Viagem!
            </h2>
            <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
        </HomeContainer>
    );
}

export default HomePage;