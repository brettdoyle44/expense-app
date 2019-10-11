import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import ExpenseListFilters from '../components/ExpenseListFilters'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '80%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
    margin: 'auto',
    padding: theme.spacing(4),
    background: '#555555'
  },
  table: {
    width: '100%'
  },
  tableText: {
    fontSize: '1em',
    fontWeight: '900',
    color: 'white'
  }
}))

export const ExpenseList = props => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Container fixed>
        <Paper className={classes.paper}>
          <ExpenseListFilters />
          <Table className={classes.table} size="medium">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableText}>
                  Expense Name
                </TableCell>
                <TableCell className={classes.tableText} align="right">
                  Cost
                </TableCell>
                <TableCell className={classes.tableText} align="right">
                  Date of Purchase
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.expenses.map(expense => (
                <TableRow key={expense.id}>
                  <ExpenseListItem key={expense.id} {...expense} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
