import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: '1.5em',
    color: '#BB86FC',
    fontWeight: '900'
  }
}))

export const Header = ({ startLogout }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Expense App
          </Typography>
          <Button color="inherit" size="large" onClick={startLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(
  undefined,
  mapDispatchToProps
)(Header)
