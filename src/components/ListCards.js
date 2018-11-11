import React from 'react'
import CardPerson from './CardPerson'
import Navbar from './Navbar'
import jsonResponse from '../jsonResponse'
import { Grid, withStyles } from '@material-ui/core';

const styles = {
  root: {
    maxWidth: 1280,
    margin: '0 auto'
  }
}

const ListCards = props => {
  
  const { classes } = props
  const blockedPerson = !!props.location.params ? props.location.params.blockedPerson : []
  const displayPerson = jsonResponse
    .filter(person => blockedPerson.indexOf(person.idPerson) === -1)

  return (
    <div>
      <Navbar 
        score={!!props.location.params && props.location.params.score}
      />
      <Grid container spacing={16} className={classes.root}>
        {
          !!displayPerson.length ?
            displayPerson.map(response =>
              <CardPerson
                key={response.idPerson}
                imagePath={response.image}
                content={response.description}
                idPerson={response.idPerson}
                params={!!props.location.params && props.location.params}
                action={true}
              />
            )
            :
            <strong className="flow-text">
              Não existem mais entrevistas!
            </strong>
        }
      </Grid>
    </div>
  )
}

export default withStyles(styles)(ListCards)