import React, { Component } from 'react'
import { TextField, Grid, Button, Paper, Typography, withStyles } from '@material-ui/core';

const styles = {
  padding: {
    padding: 20
  }
}

class InterviewForm extends Component {

  constructor() {
    super()
    this.state = {
      proposal: null,
      status: null,
      isFetching: null
    }
  }

  sendEmail() {

    const { score, user, email } = this.props

    let data = {
      service_id: 'interviewGmail',
      template_id: 'template_wq394HLG',
      user_id: 'user_mE0PxznizEN1C8Z1m8ft4',
      template_params: {
        'username': 'user_mE0PxznizEN1C8Z1m8ft4',
        'g-recaptcha-response': '9a5cc8512918043f933fd46b6be9afed',
        'name': user,
        'email': email,
        'score': score,
        'proposal': this.state.proposal
      }
    }

    this.setState({
      isFetching: true
    })

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => this.setState({ status: result.status }))
    .then(this.setState({ isFetching: true }))
  }

  handleTextChange(e) {
    this.setState({
      proposal: e.target.value
    })
  }

  render() {

    const { classes } = this.props

    return (
  
      <Grid item sm={12}>
  
        {
          this.state.status && <Paper>
            {
              this.state.status === 200
              ? <Typography variant="body1" className={classes.padding}>Entrevistas finalizadas, o gestor receberá um e-mail!</Typography>
              : <Typography variant="body1" className={classes.padding}>Erro ao finalizar entrevista</Typography>
            }
          </Paper>
        }
  
        <TextField
          label="Proposta"
          multiline
          rows="5"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={e => this.handleTextChange(e) }
        />
  
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.sendEmail()}
          disabled={!(this.state.proposal) || this.state.isFetching}
        >
          Enviar Proposta
        </Button>
      </Grid>
    )
  }
}

export default withStyles(styles)(InterviewForm)