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
            <p>
                Bem-vindx a LabeX, sua melhor escolha de Viagem!
            </p>
            <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
        </div>
    );
}

export default HomePage;