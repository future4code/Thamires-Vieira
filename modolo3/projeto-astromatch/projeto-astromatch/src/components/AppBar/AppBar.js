import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`

function AppBar(props) {
  return (
    <AppBarContainer>
      <Button variant="outlined" color="secondary" onClick={props.goToChooseProfilePage}>Escolher</Button>
      <h2>Astromatch</h2>
      <Button variant="outlined" color="secondary" onClick={props.goToMatchListPage}>Lista</Button>
    </AppBarContainer>
  )
}

export default AppBar;
