import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import AuthenticatedRoute from './AuthenticatedRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <AuthenticatedRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
        />
        <AuthenticatedRoute path="/create" component={AddExpensePage} />
        <AuthenticatedRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
