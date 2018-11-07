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
      blockedPerson: null,
      currentScore: null,
      score: 0
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id
    const params = this.props.location.params

    console.log("App Params:", params)
    
    !!params && params.score &&
    this.setState({
      score: params.score,
      blockedPerson: params.blockedPerson
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

    //limpa as opções selecionadas
    e.target.reset()
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
            blockedPerson={this.state.blockedPerson}
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
