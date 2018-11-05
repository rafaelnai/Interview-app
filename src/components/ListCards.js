import React from 'react'
import Card from './Card'
import jsonResponse from '../jsonResponse'

const ListCards = (props) => {

  const score = props

  return(
    <div className="row">
    {
      jsonResponse.map(response =>
        <Card
          key={response.idPerson}
          imagePath={response.image}
          content={response.description}
          idPerson={response.idPerson}
          score={score}
          />
          )
        }
    </div>
  )
}

export default ListCards