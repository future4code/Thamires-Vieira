import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SignUpPage from '../pages/SignUpPage/SignUp';
const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/login"}>
                        <LoginPage />
                    </Route>
                    <Route exact path={"/adicionar-receita"}>
                        <AddRecipesPage/>
                    </Route>
                    <Route exact path={"/"}>
                        <RecipesListPage/>
                    </Route>
                    <Route exact path={"/detalhe/:id"}>
                        <RecipeDetailPage/>
                    </Route>
                    <Route exact path={"/cadastro"}>
                        <SignUpPage/>
                    </Route>
                    <Route>
                       <ErrorPage /> 
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;