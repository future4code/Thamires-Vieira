import React from "react";
import { useHistory } from "react-router-dom";



const CreateTripPage = () => {
    const history = useHistory();

    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }
    
    return (
        <div>
            <p>
                Criar Viagem
            </p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button type={"submit"}>Criar</button>
        </div>
    );
}

export default CreateTripPage;