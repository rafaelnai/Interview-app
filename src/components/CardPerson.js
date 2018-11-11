import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  withStyles,
  Typography
} from '@material-ui/core'

const styles = {
  media: {
    height: 300
  },
  link: {
    textDecoration: 'none',
    color: 'none'
  }
}

const CardPerson = props => {

  const {
    imagePath,
    content,
    idPerson,
    params,
    classes
  } = props

  return (
    <Grid item sm={12} md={4}>
      <Card className={classes.card}>
        <Link className={classes.link} to={{
          pathname: '/interview/' + idPerson,
          params: params
        }}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imagePath}
              title={content}
            />
            <CardContent className={classes.content}>
              {content.map((item, index) =>
                <Typography key={'content' + index} variant="body1">{item}</Typography>)}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  )
}

export default withStyles(styles)(CardPerson)