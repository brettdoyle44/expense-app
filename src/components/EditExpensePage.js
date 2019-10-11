import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import Grid from '@material-ui/core/Grid'
import { createGlobalStyle } from 'styled-components'
import Typography from '@material-ui/core/Typography'

const GlobalStyle = createGlobalStyle`
  body {
    background: #121212;
  }
`

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ marginTop: '1em' }}
        >
          <Typography variant="h4" component="h3" style={{ color: '#BB86FC' }}>
            Edit Your Expense
          </Typography>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ marginTop: '2em' }}
        >
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            buttonText="Edit Expense"
            onRemove={this.onRemove}
          />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage)
