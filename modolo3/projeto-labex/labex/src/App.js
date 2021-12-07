import React from "react"
import { Switch } from "react-router"
import { BrowserRouter, Route } from "react-router-dom"
import AdminHomePage from "./Pages/AdminHomePage"
import ApplicationFormPage from "./Pages/ApplicationFormPage"
import CreateTripPage from "./Pages/CreateTripPage"
import HomePage from "./Pages/HomePage"
import ListTripsPage from "./Pages/ListTripsPage"
import LoginPage from "./Pages/LoginPage"
import TripDetailsPage from "./Pages/TripDetailsPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>
        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>
        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
        <Route>
          <div>Erro 404 - Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;