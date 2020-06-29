import * as React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import 'regenerator-runtime'
import LayoutRoute from '../components/LayoutComponents/LayoutRoute'
import Layout from '../components/LayoutComponents/Layout'
import UserAccounts from './UserAccounts'
import AccountTransactions from './AccountTransactions'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/Accounts" />
        </Route>
        <LayoutRoute
          exact
          path={'/accounts'}
          component={UserAccounts}
          layout={Layout}
        />
        <LayoutRoute
          exact
          path={'/account/:id'}
          component={AccountTransactions}
          layout={Layout}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
