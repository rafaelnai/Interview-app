import React from 'react'
import { TextField, Grid, Button } from '@material-ui/core';

const InterviewForm = props => {

  const { score, user, email } = props
  let proposal = ''

  const sendEmail = () => {

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
        'proposal': proposal
      }
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (

    <Grid item sm={12}>
      <TextField
        label="Proposta"
        multiline
        rows="5"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={e => proposal = e.target.value }
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => sendEmail()}
      >
        Enviar Proposta
      </Button>
    </Grid>
  )
}

export default InterviewForm