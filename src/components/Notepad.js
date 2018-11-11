import React from 'react'
import { Grid, TextField } from '@material-ui/core';

const Notepad = () => {

  return (
    <Grid item sm={12} md={10}>
      <TextField
        label="Anotações"
        multiline
        rows="20"
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </Grid>
  )
}

export default Notepad