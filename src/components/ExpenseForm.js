import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const Input = styled.input`
  font-size: 0.75em;
  color: #333333;
  padding: 1em;
  border: 1px solid #cacccd;
  width: 200px;
`

const TextArea = styled.textarea`
  font-size: 0.75em;
  color: #333333;
  padding: 1em;
  border: 1px solid #cacccd;
  width: 200px;
`

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      message: ''
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
      this.setState(() => ({ message: 'Successfully added expense' }))
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid container>
            <Grid item xs={12}>
              <Grid item style={{ color: '#ef5350', textAlign: 'center' }}>
                {this.state.error && <p>{this.state.error}</p>}
              </Grid>
              <Grid item style={{ color: '#00e676', textAlign: 'center' }}>
                {this.state.message && <p>{this.state.message}</p>}
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="space-around">
            <form onSubmit={this.onSubmit}>
              <Grid item xs={12} style={{ paddingBottom: '10px' }}>
                <Input
                  type="text"
                  placeholder="Description"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
                />
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: '10px' }}>
                <Input
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                  type="text"
                  placeholder="Amount"
                />
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: '10px' }}>
                <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              </Grid>
              <Grid item xs={12} style={{ paddingBottom: '10px' }}>
                <TextArea
                  onChange={this.onNoteChange}
                  placeholder="Add a note for your expense"
                  value={this.state.note}
                ></TextArea>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ backgroundColor: '#BB86FC', color: '#ffffff' }}
                  variant="contained"
                  size="large"
                  type="submit"
                >
                  {this.props.buttonText}
                </Button>
                {this.props.onRemove && (
                  <Button
                    style={{ marginLeft: '1em' }}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={this.props.onRemove}
                  >
                    Delete
                  </Button>
                )}
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ExpenseForm
