import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddExpensePage from '../components/AddExpensePage'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    textAlign: 'center',
    color: '#121212',
    backgroundColor: '#BB86FC'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[900]
  },
  dialog: {
    padding: theme.spacing(3),
    width: '300px'
  }
}))

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Paper square={true} className={classes.root}>
        <Typography style={{ fontWeight: '900' }} variant="h5" component="h3">
          Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
        </Typography>
        <Button
          style={{
            marginTop: '10px',
            backgroundColor: '#212121',
            color: '#BB86FC'
          }}
          size="large"
          onClick={handleClickOpen}
        >
          Add a New Expense
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="form-dialog-title"
            style={{
              backgroundColor: '#BB86FC',
              color: '#121212'
            }}
          >
            <strong>
              Add a New Expense{' '}
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </strong>
          </DialogTitle>
          <DialogContent
            style={{ backgroundColor: '#333333' }}
            className={classes.dialog}
          >
            <AddExpensePage style={{ height: '100%' }} />
          </DialogContent>
        </Dialog>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
