import React from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    position: sticky;
`

function ResetButton() {

    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thamires-carver/clear')
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <ButtonContainer>
            <Button variant="outlined" color="secondary" onClick={onClickReset}>Resetar</Button>
        </ButtonContainer>
    )
}

export default ResetButton