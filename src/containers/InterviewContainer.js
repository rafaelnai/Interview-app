import React from 'react'
import Grid from '@material-ui/core/Grid'
import Notepad from '../components/Notepad';
import Interview from '../components/Interview';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    maxWidth: 1080,
    margin: '0 auto'
  }
}

const InterviewContainer = props => {

  const { 
    hasResponse,
    question,
    round,
    idPerson,
    blockedPerson,
    handleInputRadio,
    sendResponse,
    score,
    classes
  } = props

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >

      <Grid item sm={12} md={4}>
        <Notepad />
      </Grid>

      <Grid item sm={12} md={8}>
        <Interview
          hasResponse={hasResponse}
          question={question}
          round={round}
          idPerson={idPerson}
          blockedPerson={blockedPerson}
          handleInputRadio={(e, score) => handleInputRadio(e, score)}
          sendResponse={e => sendResponse(e)}
          score={score}
        />
      </Grid>

    </Grid>
  )
}

export default withStyles(styles)(InterviewContainer)
