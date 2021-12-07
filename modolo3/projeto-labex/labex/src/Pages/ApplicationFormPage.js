import React from "react";
import { useHistory } from "react-router-dom";


const ApplicationFormPage = () => {
    const history = useHistory();

    const goToListTripsPage = (history) => {
        history.push("/trips/list")
    }

    return (
        <div>
            <h2>
                Inscreva-se para ter uma viagem inesquecível!
            </h2>
            <form>
                <select>
                    <option>Escolha uma Viagem</option>
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                >
                    <option>Escolha um País</option>
                </select>
            </form>
            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
            <button type={"submit"}>Enviar</button>
        </div>
    );
}

export default ApplicationFormPage;