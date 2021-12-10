import styled from 'styled-components'

const TripCardContainer = styled.div`
    cursor: pointer;
    width: 40vw;
    min-width: 272px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: rgba(246, 247, 235, .6);
`

export default function TripCard(props) {
    return (
        <TripCardContainer>
            <p><b>Viagem: </b>{props.name}</p>
            <p><b>Planeta: </b>{props.planet}</p>
            <p><b>Descrição: </b>{props.description}</p>
            <p><b>Data de Partida: </b>{props.date}</p>
            <p><b>Duração (dias): </b>{props.duration}</p>
        </TripCardContainer>
    )
}