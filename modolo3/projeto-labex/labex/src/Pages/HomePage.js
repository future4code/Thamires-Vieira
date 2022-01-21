import React from "react";
import { useHistory } from "react-router-dom";



const HomePage = () => {
    const history = useHistory();

    const goToListTripsPage = (history) => {
        history.push("/trips/list")
    }

    const goToLoginPage = (history) => {
        history.push("/login")
    }

    return (
        <div>
            <h1>
                Bem-vindx à LabeX </h1>
            <h2>
                sua melhor escolha de Viagem!
            </h2>
            <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
        </div>
    );
}

export default HomePage;