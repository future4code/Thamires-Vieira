import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function ChooseButtons(props) {
  return (
    <ButtonsContainer>
      <Button variant="contained" color="success" onClick={props.onClickYes}>
      ♥
      </Button>
      <Button variant="outlined" color="error" onClick={props.onClickNo}>
        X
      </Button>
    </ButtonsContainer>
  )
}

export default ChooseButtons;
