import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css'


class App extends Component {

  constructor() {
    super()
    this.state = {
      hasResponse: false,
      question: null,
    }
  }

  handleInputRadio(e) {

    this.setState({
      hasResponse: false,
      question: e.target.value
    })
  }

  sendResponse(e) {
    e.preventDefault()
    //Envia resposta
    
    this.state.question && this.setState({
      hasResponse: true
    })
  }

  getQuestion() {

    return [
      {
        person: 'Dona Josefa',
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png',
        description: [
          '75 anos',
          'Casada',
          'Mãe de 5 filhos e vó de 4',
          'Casada'
        ],
        id: 1,
        alternatives: [
          {
            question: 'Possui Convênio?',
            response: 'Sim',
            correct: false
          },
          {
            question: 'Qual foi a última vez que passou no médico?',
            response: 'Não Lembro',
            correct: false
          },
          {
            question: 'Como vê a Saúde no Brasil',
            response: 'Como assim?',
            correct: false
          },
          {
            question: 'Boa tarde, como vai a senhora?',
            response: 'Vou levando meu filho',
            correct: true
          }
        ],
      }
    ]
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
            <form>
              <p>{ this.state.hasResponse && this.state.question }</p>
              {
                this.getQuestion()
                  .map((item, index) =>
                    <div key={item.person + index}>
                      <img src={item.image} alt={item.person} width={200} />
                      <h4>{item.person}</h4>

                      {
                        item.description
                          .map((item, index) =>
                            <p key={item + index}>{item}</p>)
                      }

                      {
                        item.alternatives.map((alternatives, index) =>
                          <p key={'alternative' + index}>
                            <label>
                              <input
                                name="question"
                                type="radio"
                                onClick={e => this.handleInputRadio(e)}
                                value={alternatives.response} />
                              <span>{alternatives.question}</span>
                            </label>
                          </p>
                        )
                      }
                      <button className="btn" onClick={e => this.sendResponse(e)}>Enviar Resposta</button>
                    </div>
                  )
              }
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
