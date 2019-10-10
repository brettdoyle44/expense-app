import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const Select = styled.select`
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  height: 50px;
  border: 1px solid #cacccd;
`

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid
              container
              style={{ marginBottom: '1em' }}
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <Paper
                  style={{
                    padding: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 200,
                    height: '50px'
                  }}
                >
                  <InputBase
                    style={{
                      marginLeft: '16px',
                      flex: 1,
                      fontSize: '0.75em'
                    }}
                    type="text"
                    placeholder="Search Your Expenses"
                    inputProps={{ 'aria-label': 'search your expenses' }}
                    value={this.props.filters.text}
                    onChange={e => {
                      this.props.dispatch(setTextFilter(e.target.value))
                    }}
                  />
                  <IconButton style={{ padding: 10 }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item>
                <Select
                  value={this.props.filters.sortBy}
                  onChange={e => {
                    if (e.target.value === 'date') {
                      this.props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount') {
                      this.props.dispatch(sortByAmount())
                    }
                  }}
                >
                  <option value="date">Date</option>
                  <option value="amount">Amount</option>
                </Select>
              </Grid>
              <Grid>
                <DateRangePicker
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
