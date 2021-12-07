import React from "react";
import { useHistory } from "react-router-dom";


const ApplicationFormPage = () => {
    const history = useHistory();

    const goToListTripsPage = (history) => {
        history.push("/trips/list")
    }
    
    return (
        <div>
            <p>
                Inscreva-se Para Uma Viagem
            </p>
            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
            <button type={"submit"}>Enviar</button>
        </div>
    );
}

export default ApplicationFormPage;