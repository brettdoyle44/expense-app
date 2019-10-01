import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  baseState = this.state

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({
      description
    }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onChangeAmount = e => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please add a description' }))
    } else if (!this.state.amount) {
      this.setState(() => ({ error: 'Please add an amount' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            value={this.state.amount}
            onChange={this.onChangeAmount}
            type="text"
            placeholder="Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense"
            value={this.state.note}
          ></textarea>
          <button>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
