import React, { Component } from 'react'
import CardPerson from './CardPerson'
import Navbar from './Navbar'
import InterviewForm from './InterviewForm'
import jsonResponse from '../jsonResponse'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  root: {
    maxWidth: 1280,
    margin: '0 auto'
  }
}

class ListCards extends Component {

  constructor() {
    super()
    this.state = {
      userInfo: {
        name: null,
        email: null
      }
    }
  }

  componentDidMount() {

    this.props.location.userInfo && this.setState({
      userInfo: {
        name: this.props.location.userInfo.userName,
        email: this.props.location.userInfo.userEmail
      }
    })
  }

  render() {

    const blockedPerson = !!this.props.location.params ? this.props.location.params.blockedPerson : []
    const displayPerson = jsonResponse.filter(person => blockedPerson.indexOf(person.idPerson) === -1)
    const { classes } = this.props

    console.log(this.props.location)

    return (
      <div>
        <Navbar
          score={!!this.props.location.params && this.props.location.params.score}
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
                  params={!!this.props.location.params && this.props.location.params}
                  userInfo={this.state.userInfo}
                />
              )
              :
              <strong className="flow-text">
                Não existem mais entrevistas!
              </strong>
          }

          {
            !!this.props.location.params && <InterviewForm
              user={this.props.location.userInfo.name}
              email={this.props.location.userInfo.email}
              score={this.props.location.params.score}
            />
          }
        </Grid>


      </div>
    )
  }
}

export default withStyles(styles)(ListCards)