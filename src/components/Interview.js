import React from 'react'
import jsonResponse from '../jsonResponse'

const Interview = (props) => {

  const {
    hasResponse,
    question,
    round,
    handleInputRadio,
    sendResponse
  } = props

  return (
    <form>

      {
        hasResponse &&
        <div className="card-panel teal">
          <span className="white-text">{question}</span>
        </div>
      }

      {
        jsonResponse
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
                item.turn.filter(turn => turn.round === round)
                  .map(item => item.alternatives.map((alternatives, index) =>
                    <p key={'alternative' + index}>
                      <label>
                        <input
                          name="question"
                          type="radio"
                          onClick={e => handleInputRadio(e)}
                          value={alternatives.response} />
                        <span>{alternatives.question}</span>
                      </label>
                    </p>
                  ))
              }

              <button className="btn" onClick={e => sendResponse(e)}>Enviar Resposta</button>
            </div>
          )
      }
    </form>
  )
}

export default Interview