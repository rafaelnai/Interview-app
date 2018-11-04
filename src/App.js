import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import Interview from './components/Interview'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hasResponse: false,
      question: null,
      round: 1,
      currentScore: null,
      score: 0,
    }
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
    return (
      <div className="container">
        <div className="row">

          <div className="col m4">
            <div className="card-panel">

              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Textarea</label>
                </div>
              </div>

            </div>
          </div>

          <div className="col m8">
            <Interview
              hasResponse={this.state.hasResponse}
              question={this.state.question}
              round={this.state.round}
              handleInputRadio={(e, score) => this.handleInputRadio(e, score)}
              sendResponse={e => this.sendResponse(e)}
              score={this.state.score}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
