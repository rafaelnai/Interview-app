import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Grid, TextField, Paper, Button, withStyles } from '@material-ui/core';

const styles = {
  paper: {
    padding: 30
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  avatar: {
    width: 150,
    height: '100%'
  },
  fullHeight: {
    height: '100vh',
    backgroundColor: '#2980b9'
  },
  btn: {
    marginTop: 20
  }
}

class RegisterForm extends Component {

  constructor() {
    super()
    this.state = {
      name: null,
      email: null,
      disabled: true
    }
  }

  handleInputChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid container justify="center" alignItems="center" className={classes.fullHeight}>
        <Grid item sm={12} md={4}>
          <Paper className={classes.paper}>

            <Grid container justify="center" alignItems="center">
              <Avatar
                alt="Logo Interview-app"
                src="./images/logo.svg"
                className={classes.avatar}
              />
            </Grid>

            <TextField
              name="name"
              label="Nome"
              margin="normal"
              fullWidth
              onChange={e => this.handleInputChange(e)}
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              margin="normal"
              fullWidth
              onChange={e => this.handleInputChange(e)}
            />

            <Grid container justify="flex-end">
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={!(this.state.name && this.state.email)}>

                <Link
                  className={classes.link}
                  to={{
                    pathname: "/persons",
                    userInfo: {
                      userName: this.state.name,
                      userEmail: this.state.email
                    }
                  }}>
                    Começar Entrevistas
                </Link>

              </Button>
            </Grid>

          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(RegisterForm)