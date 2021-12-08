import axios from 'axios';
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/url'
import { useState, useEffect } from 'react'
import { ProtectedPage } from '../hooks/ProtectedPage';


const TripDetailsPage = () => {

    ProtectedPage();

    const { id } = useParams();
    const [trip, setTrip] = useState({});
    const history = useHistory();

    const goToAdminHomePage = (history) => {
        history.push("/admin/trips/list")
    }

    const getTripDetail = () => {
        const token = localStorage.getItem("token");
        axios
            .get(`${BASE_URL}trip/${id}`,
                {
                    headers: {
                        auth: token
                    }
                }
            )
            .then((res) => {
                setTrip(res.data.trip);
            })
            .catch((error) => {
                console.log("Deu erro: ", error.response);
            });

    }

    useEffect(() => {
        getTripDetail();
    }, [])


    return (
        <div>

            <h1>
                Detalhes da Viagem
            </h1>
            <p>Nome da viagem:  {trip.name}</p>
            <p>Descricao:  {trip.description}</p>
            <p>Planeta:  {trip.planet}</p>
            <p>Duração:  {trip.durationInDays} dias</p>
            <p>Data:  {trip.date}</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>

        </div>
    );
}

export default TripDetailsPage;