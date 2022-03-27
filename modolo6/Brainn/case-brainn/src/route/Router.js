import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DiaDeSorte from '../pages/DiaDeSorte'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LotoFacil from '../pages/LotoFacil'
import LotoMania from '../pages/LotoMania'
import Megasena from '../pages/Megasena'
import Quina from '../pages/Quina'
import TimeMania from '../pages/TimeMania'


const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>

                    <Route exact path='/'>
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