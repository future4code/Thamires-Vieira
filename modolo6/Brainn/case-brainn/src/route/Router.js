import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSorte'
import HomePage from '../pages/HomePage/HomePage'
import ErrorPage from '../pages/HomePage/HomePage'
import LotoFacil from '../pages/LotoFacil/LotoFacil'
import LotoMania from '../pages/LotoMania/LotoMania'
import Megasena from '../pages/Megasena/Megasena'
import Quina from '../pages/Quina/Quina'
import TimeMania from '../pages/TimeMania/TimeMania'



const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                <Route exact path='/'>
                        <HomePage />
                    </Route>

                    <Route exact path='/megasena'>
                        <Megasena />
                    </Route>

                    <Route exact path='/quina'>
                        <Quina />
                    </Route>

                    <Route exact path='/lotofacil'>
                        <LotoFacil />
                    </Route>

                    <Route exact path='/lotomania'>
                        <LotoMania />
                    </Route>

                    <Route exact path='/timemania'>
                        <TimeMania />
                    </Route>

                    <Route exact path='/diadesorte'>
                        <DiaDeSorte />
                    </Route>

                    <Route>
                        <h1>Página não encontrada!</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;