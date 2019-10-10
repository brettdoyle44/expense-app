import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { createGlobalStyle } from 'styled-components'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 4)
  },
  wordPad: {
    padding: theme.spacing(2, 0),
    color: '#512DA8',
    fontWeight: 900
  },
  wordPadTwo: {
    padding: theme.spacing(0, 0, 2, 0)
  }
}))

const GlobalStyle = createGlobalStyle`
  body {
    background: #673AB7;
    background: -webkit-linear-gradient(to right, #512DA8, #673AB7);
    background: linear-gradient(to right, #512DA8, #673AB7);

  }
`

export const LoginPage = ({ startLogin }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <GlobalStyle />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item sm={8} xs={10} style={{ textAlign: 'center' }}>
          <Paper className={classes.root}>
            <Typography
              style={{ color: '#512DA8' }}
              className={classes.wordPad}
              variant="h2"
              component="h3"
            >
              Expense App
            </Typography>
            <Typography
              className={classes.wordPadTwo}
              component="p"
              style={{ fontSize: '1em' }}
            >
              Signin/signup using the Google!
            </Typography>
            <Button
              onClick={startLogin}
              size="large"
              variant="contained"
              color="primary"
              style={{
                background: 'linear-gradient(to right, #512DA8, #673AB7)'
              }}
            >
              Sign-in with Google
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage)
