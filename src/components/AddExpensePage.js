import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense)
  }
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} buttonText="Add Expense" />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage)
