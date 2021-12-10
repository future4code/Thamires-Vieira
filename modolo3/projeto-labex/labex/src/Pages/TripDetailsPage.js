import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useProtectedPage } from '../hooks/ProtectedPage';
import { getTripDetail } from '../components/api_list';


const TripDetailsPage = () => {

    useProtectedPage()

    const history = useHistory()
    const pathParams = useParams()

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getTripDetail(pathParams.id)
    }, [])

    return (
        <div>
            Detalhes da Viagem
            ID da viagem: {pathParams.id}
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;