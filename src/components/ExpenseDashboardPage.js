import React from 'react'
import ExpenseList from './ExpenseList'
// import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #121212;
  }
`

const ExpenseDashboardPage = () => (
  <div>
    <GlobalStyle />
    <ExpenseSummary />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage
