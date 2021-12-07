import React from "react";
import { useHistory } from "react-router-dom";


const ListTripsPage = () => {
    const history = useHistory();

    const goToHomePage = (history) => {
        history.push("/")
    }

    const goToApplicationFormPage = (history) => {
        history.push("/trips/application")
    }

    return (
        <div>
            <h1>
                Lista De Viagens
            </h1>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
        </div>
    );
}

export default ListTripsPage;