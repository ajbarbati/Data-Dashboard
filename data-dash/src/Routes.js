import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dash from './Pages/Dash'
import Login from './Pages/login'
import Register from './Pages/Register'

export default () => (
    <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Dash" component={Dash} />
        <Route exact path="/Register" component={Register} />
    </Switch>
)