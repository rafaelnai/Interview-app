import React from 'react'
import Card from './Card'
import jsonResponse from '../jsonResponse'

const ListCards = props => {

  const blockedPerson = !!props.location.params ? props.location.params.blockedPerson : []
  // jsonResponse.forEach(person => blockedPerson.indexOf(person.idPerson) === -1 ? true : false)

  return(
    <div className="row">
      {
        jsonResponse
        .filter(person => blockedPerson.indexOf(person.idPerson) === -1)
        .map(response =>
          <Card
            key={response.idPerson}
            imagePath={response.image}
            content={response.description}
            idPerson={response.idPerson}
            params={!!props.location.params && props.location.params}
            action={true}
          />
        )
      }
    </div>
  )
}

export default ListCards