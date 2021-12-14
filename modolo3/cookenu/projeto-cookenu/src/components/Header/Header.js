import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToLogin, goToRecipesList } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header