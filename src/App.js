import React, { Component } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import InterviewContainer from './containers/InterviewContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hasResponse: false,
      question: null,
      round: 1,
      idPerson: null,
      currentScore: null,
      score: 0
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id
    
    !!this.props.location.score &&
    this.setState({
      score: this.props.location.score.location.state.score
    })

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
  }

  render() {
    if(this.state.idPerson)
    return (
      <div className="container">
        
        {
          this.state.idPerson &&
          <InterviewContainer
            hasResponse={this.state.hasResponse}
            question={this.state.question}
            round={this.state.round}
            idPerson={this.state.idPerson}
            handleInputRadio={(e, score) => this.handleInputRadio(e, score)}
            sendResponse={e => this.sendResponse(e)}
            score={this.state.score}
          />
        }

      </div>

    );
  }
}

export default App;
