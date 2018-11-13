import React from 'react'
import Grid from '@material-ui/core/Grid'
import jsonResponse from '../jsonResponse'
import { Link } from 'react-router-dom'
import { withStyles, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const styles = {
  paper: {
    padding: '15px',  
    marginBottom: '1rem'
  },
  link: {
    marginRight: '20px',
    textDecoration: 'none'
  },
  action: {
    marginTop: '40px'
  }
}

const Interview = props => {

  const {
    hasResponse,
    question,
    round,
    idPerson,
    blockedPerson,
    handleInputRadio,
    sendResponse,
    score,
    classes,
    userInfo
  } = props

  return (
    <form onSubmit={e => sendResponse(e)}>
      
      {
        hasResponse &&
        <Paper className={classes.paper}>
          <span>{question}</span>
        </Paper>
      }

      {
        jsonResponse.filter(person => person.idPerson === idPerson)
          .map((item, index) =>
            <div key={item.person + index}>

              <Grid container justify="center" alignItems="center">

                <Grid item sm={12} md={6}>
                  <img src={item.image} alt={item.person} height={200} />
                </Grid>

                <Grid item sm={12} md={6}>
                  <Typography variant="h4">{item.person}</Typography>
                  {
                    item.description.map((desc, index) => 
                      <Typography key={"desc" + index} variant="body1">{desc}</Typography>)
                  }
                </Grid>

              </Grid>


              {
                round <= item.turn.length 
                ?
                item.turn.filter(turn => turn.round === round)
                  .map(item => item.alternatives.map((alternatives, index) =>
                    <Typography variant="body1" key={'alternative' + index}>
                      <label>
                        <input
                          name="question"
                          type="radio"
                          onClick={e => handleInputRadio(e, alternatives.score)}
                          value={alternatives.response}/>
                        <span>{alternatives.question}</span>
                      </label>
                    </Typography>
                  )
                )
                : 
                <p>
                  Entrevista finalizada, sua pontuação atual é: {score}!
                  Para mais entrevistas  
                  <Link to={{
                    pathname: "/persons",
                    params: { 
                      score,
                      idPerson,
                      blockedPerson: !!blockedPerson
                      ? blockedPerson.concat(idPerson)
                      : [].concat(idPerson)
                    },
                    userInfo: {
                      name: userInfo.name,
                      email: userInfo.email
                    }
                  }}> clique aqui</Link>.
                </p>
              }

              {
                round <= item.turn.length && 
                <div className={classes.action}>
                  <Link className={classes.link} to={{
                    pathname: "/persons",
                    params: { 
                      score,
                      idPerson,
                      blockedPerson: !!blockedPerson
                      ? blockedPerson.concat(idPerson)
                      : [].concat(idPerson)
                    },
                    userInfo: {
                      name: userInfo.name,
                      email: userInfo.email
                    }
                  }}>
                    <Button color="primary">Parar de entrevistar</Button>
                  </Link>
                  <Button variant="contained" color="primary" type="submit">Entrevistar</Button>
                </div>
                
              }
            </div>
          )
      }
    </form>
  )
}

export default withStyles(styles)(Interview)