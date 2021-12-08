import React from "react";
import { useHistory } from "react-router-dom";
import { ProtectedPage } from "../hooks/ProtectedPage";

const AdminHomePage = () => {
    ProtectedPage();
    
    const history = useHistory();

    const goToHomePage = (history) => {
        history.push("/")
    }
    const goToCreateTripPage = (history) => {
        history.push("/admin/trips/create")
    }

    return (
        <div>
            <h1>
                Painel Admin
            </h1>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick>Logout</button>
        </div>
    );
}

export default AdminHomePage;