import React from "react";
import { useHistory } from "react-router-dom";

const AdminHomePage = () => {
    const history = useHistory();

    const goToHomePage = (history) => {
        history.push("/")
    }
    const goToCreateTripPage = (history) => {
        history.push("/admin/trips/create")
    }

    return (
        <div>
            <p>
                Painel Admin
            </p>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick>Logout</button>
        </div>
    );
}

export default AdminHomePage;