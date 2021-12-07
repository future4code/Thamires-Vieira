import React from 'react'
import { useHistory } from 'react-router-dom'

const TripDetailsPage = () => {
    const history = useHistory();

    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }
    return (
        <div>
            <p>
                Detalhes da Viagem
            </p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}

export default TripDetailsPage;