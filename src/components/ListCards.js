import React from 'react'
import Card from './Card'
import jsonResponse from '../jsonResponse'

const ListCards = props => {

  const blockedPerson = !!props.location.params ? props.location.params.blockedPerson : []

  const displayPerson = jsonResponse
    .filter(person => blockedPerson.indexOf(person.idPerson) === -1)

  const styleTextStrong = {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem'
  }

  return(
    <div className="row">
      {
        !displayPerson.length ?
          displayPerson.map(response =>
            <Card
              key={response.idPerson}
              imagePath={response.image}
              content={response.description}
              idPerson={response.idPerson}
              params={!!props.location.params && props.location.params}
              action={true}
            />
          )
          :
          <strong className="flow-text" style={styleTextStrong}>
            Não existem mais entrevistas!
          </strong>
      }
    </div>
  )
}

export default ListCards