import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { useHistory } from "react-router-dom";
import { goToResultsPage } from "../../routes/coordinator";


const HomePage = () => {
  const history = useHistory();

  const onSearch = () => {
    goToResultsPage(history)
  }

  return (
    <><div>
      <form onSubmit={onSearch}>
        <TextField
          name={'search'}
          label={"Pesquisar"}
          variant={"outlined"}
          margin={"normal"} />
      </form>
    </div>
      <Button onClick={() => onSearch()}>
        Buscar
      </Button>
    </>
  );
}

export default HomePage;