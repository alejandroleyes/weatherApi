import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import MainLayout from "./Layouts/MainLayout"
import CityInformation from "./Pages/CityInformation/CityInformation"
import Notfound from "./Pages/NotFound/Notfound"
import BadRequest from "./Pages/BadRequest/BadRequest"
function App() {
  document.title = "Api Weather"
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cityInformation/:city" exact>
            <CityInformation />
          </Route>
          <Route path="/404" exact>
            <Notfound />
          </Route>
          <Route path="/400" exact>
            <BadRequest />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
