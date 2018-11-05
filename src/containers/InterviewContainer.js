import React from 'react'
import Notepad from '../components/Notepad';
import Interview from '../components/Interview';

const InterviewContainer = props => {

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
    <div className="row">

      <div className="col m4">
        <Notepad />
      </div>

      <div className="col m8">
        <Interview
          hasResponse={hasResponse}
          question={question}
          round={round}
          idPerson={idPerson}
          handleInputRadio={(e, score) => handleInputRadio(e, score)}
          sendResponse={e => sendResponse(e)}
          score={score}
        />
      </div>

    </div>
  )
}

export default InterviewContainer