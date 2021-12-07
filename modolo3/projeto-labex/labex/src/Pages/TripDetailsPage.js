import React from 'react'
import { useHistory } from 'react-router-dom'

const TripDetailsPage = () => {
    const history = useHistory();

    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }
    return (
        <div>
            <h1>
                Detalhes da Viagem
            </h1>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}

export default TripDetailsPage;