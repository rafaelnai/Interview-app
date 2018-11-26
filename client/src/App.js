import React, { Component } from 'react'
import InterviewContainer from './containers/InterviewContainer'
import Grid from '@material-ui/core/Grid'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hasResponse: false,
      question: null,
      round: 1,
      idPerson: null,
      blockedPerson: null,
      currentScore: null,
      score: 0,
      userInfo: null
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id
    const params = this.props.location.params
    const userInfo = this.props.location.userInfo

    !!params && params.score &&
      this.setState({
        score: params.score,
        blockedPerson: params.blockedPerson
      })

    !!userInfo && this.setState({ userInfo })

    this.setState({
      idPerson: parseInt(id)
    })

  }

  handleInputRadio(e, score) {

    this.setState({
      hasResponse: false,
      question: e.target.value,
      currentScore: score
    })
  }

  sendResponse(e) {
    e.preventDefault()
    //Envia resposta

    this.state.question && this.setState({
      hasResponse: true,
      round: this.state.round + 1,
      score: this.state.score + this.state.currentScore
    })

    //limpa as opções selecionadas
    e.target.reset()
  }

  render() {
    if (this.state.idPerson)
      return (
        <Grid className="container">

          {
            this.state.idPerson &&
            <InterviewContainer
              hasResponse={this.state.hasResponse}
              question={this.state.question}
              round={this.state.round}
              idPerson={this.state.idPerson}
              blockedPerson={this.state.blockedPerson}
              handleInputRadio={(e, score) => this.handleInputRadio(e, score)}
              sendResponse={e => this.sendResponse(e)}
              score={this.state.score}
              userInfo={this.state.userInfo}
            />
          }

        </Grid>
      );
  }
}

export default App;
