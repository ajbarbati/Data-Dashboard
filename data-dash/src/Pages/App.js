import React from "react"
import "../App.css"
import Header from "../components/Headers/Header"
import Chart1 from "../components/chart-bar"
import Chart2 from "../components/chart-line"
import { Container, Row, Col, Button } from "reactstrap"

import { NavLink} from "react-router-dom"
import Routing from "../Routes"


function App() {
  return (
    <div className="App">
      <NavLink exact to="/Login" activeClassName="is-active">
        <Button block color="success" size="sm" type="button">
          Login
        </Button>
      </NavLink>
      <NavLink exact to="/Register" activeClassName="is-active">
        <Button block color="primary" size="sm" type="button">
          Register
        </Button>
      </NavLink>

      <Routing />
    </div>
  )
}

export default App
