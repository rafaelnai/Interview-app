import React from 'react'
import jsonResponse from '../jsonResponse'
import { Link } from 'react-router-dom'

const Interview = (props) => {

  const {
    hasResponse,
    question,
    round,
    idPerson,
    handleInputRadio,
    sendResponse,
    score
  } = props

  return (
    <form onSubmit={e => sendResponse(e)}>

      {
        hasResponse &&
        <div className="card-panel teal">
          <span className="white-text">{question}</span>
        </div>
      }

      {
        jsonResponse.filter(person => person.idPerson === idPerson)
          .map((item, index) =>
            <div key={item.person + index}>

              <div className="row">
                <div className="col m6">
                  <img src={item.image} alt={item.person} height={200} />
                </div>
                <div className="col m6">
                  <h4>{item.person}</h4>
                  <pre>{item.description}</pre>
                </div>
              </div>


              {
                round <= item.turn.length 
                ?
                item.turn.filter(turn => turn.round === round)
                  .map(item => item.alternatives.map((alternatives, index) =>
                    <p key={'alternative' + index}>
                      <label>
                        <input
                          name="question"
                          type="radio"
                          onClick={e => handleInputRadio(e, alternatives.score)}
                          value={alternatives.response}/>
                        <span>{alternatives.question}</span>
                      </label>
                    </p>
                  )
                )
                : 
                <p>
                  Entrevista finalizada, sua pontuação atual é: {score}!
                  Para mais entrevistas <Link to={{pathname: "/", params: { score, idPerson }}}>clique aqui</Link>,
                  para finalizar <a href="www.teste.com">clique aqui</a>
                </p>
              }

              {
                round <= item.turn.length && 
                <button className="btn" type="submit">Enviar Resposta</button>
              }
            </div>
          )
      }
    </form>
  )
}

export default Interview