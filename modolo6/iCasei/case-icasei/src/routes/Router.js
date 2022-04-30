import React from "react";
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import ResultsPage from '../pages/ResultsPage/ResultsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Header from "../components/header/Header";



const Router = () => {

    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/results">
                    <ResultsPage/>
                </Route>
                <Route exact path="/detail/:id">
                    <DetailsPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router