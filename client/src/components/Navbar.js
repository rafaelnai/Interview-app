import React from 'react'
import { AppBar, Typography, Toolbar, withStyles } from '@material-ui/core'

const styles = {
  nameApp: {
    flexGrow: 1
  }
}

const Navbar = props => {

  const { classes, score } = props

  return(
    <AppBar position="static">
      <Toolbar>  
        <Typography variant="h6" color="inherit" className={classes.nameApp}>
          Interview-App
        </Typography>
        <Typography variant="h6" color="inherit">
          Pontuação: {score ? score : 0}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar)