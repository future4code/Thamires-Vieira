import React from "react";
import { useHistory } from "react-router-dom";
import { ProtectedPage } from "../hooks/ProtectedPage";



const CreateTripPage = () => {
    ProtectedPage();
    
    const history = useHistory();

    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <h1>
                Criar Viagem
            </h1>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button type={"submit"}>Criar</button>
        </div>
    );
}

export default CreateTripPage;