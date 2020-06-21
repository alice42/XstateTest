import * as React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import 'regenerator-runtime'
import LayoutRoute from '../components/LayoutComponents/LayoutRoute'
import Layout from '../components/LayoutComponents/Layout'

import User from './Pages/User'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/User" />
        </Route>
        <LayoutRoute exact path={'/User'} component={User} layout={Layout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
