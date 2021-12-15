import { Button } from '@mui/material';
import useProtectedPage from '../../hooks/useProtectedPage';


const RecipesListPage = () => {
    useProtectedPage()

    return(
        <div>
            <h1>RecipesListPage</h1>
            <Button variant="outlined" color="primary">Clique aqui!</Button>
        </div>
    )
}

export default RecipesListPage