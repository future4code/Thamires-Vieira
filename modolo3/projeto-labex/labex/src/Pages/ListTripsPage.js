import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTrips } from "../components/api_list";
import TripCard from "../components/TripCard";


const ListTripsPage = () => {
    const history = useHistory()
    const [trips, setTrips] = useState([])

    const goBack = () => {
        history.goBack()
    }

    const goToApplication = (id) => {
        history.push("/trips/application")
    }

    useEffect(() => {
        getTrips(setTrips)
    }, [])

    const listTrips = trips.map((trip) => {
        return (
            <TripCard 
                key={trip.id}
                date={trip.date}
                description={trip.description}
                duration={trip.durationInDays}
                name={trip.name}
                planet={trip.planet}
            />
        )
    })


    return (
        <div>
            <h2>Viagens disponíveis:</h2>
            <button onClick={goBack}>Voltar</button>
            <button onClick={() => goToApplication()}>Inscrever-se</button>
            {listTrips && listTrips.length > 0 ? listTrips : <p>Carregando...</p>}
        </div>
    )
}

export default ListTripsPage;