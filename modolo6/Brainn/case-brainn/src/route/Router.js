import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSorte'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
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
                    <Route exact path='/megasena'>
                        <Megasena />
                    </Route>

                    <Route exact path='/lotofacil'>
                        <LotoFacil />
                    </Route>

                    <Route exact path='/lotomania'>
                        <LotoMania />
                    </Route>

                    <Route exact path='/quina'>
                        <Quina />
                    </Route>

                    <Route exact path='/diadesorte'>
                        <DiaDeSorte />
                    </Route>

                    <Route exact path='/timemania'>
                        <TimeMania />
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