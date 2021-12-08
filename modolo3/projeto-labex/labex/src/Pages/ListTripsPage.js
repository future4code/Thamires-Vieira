import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/url";


const ListTripsPage = () => {
    const history = useHistory();
    const [listTrip, setListTrip] = useState([])

    const goToHomePage = (history) => {
        history.push("/")
    }

    const goToApplicationFormPage = (history) => {
        history.push("/trips/application")
    }

    const getTripList = () => {
        axios.get(`${BASE_URL}trips`)
            .then((res) => {
                setListTrip(res.data.trips)
            })
            .catch((err) => {
                console.log("erro", err);
            });

    }

    useEffect(() => {
        getTripList();
    }, [])

    const tripsList = listTrip.map((trip) => {
        return <div key={trip.id} trip={trip} />
    })


    return (
        <div>
            <h1>
                Lista De Viagens
                {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
            </h1>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
        </div>
    );
}

export default ListTripsPage;