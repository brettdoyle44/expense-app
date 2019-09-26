import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <h4>{description}</h4>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }))
      }}
    >
      remove
    </button>
  </div>
)

export default connect()(ExpenseListItem)
