import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {

  const {
    imagePath,
    content,
    idPerson,
    params
  } = props 

  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={imagePath} alt={content}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{content}</p>
          </div>
          <div className="card-action">
            <Link to={{
              pathname: '/interview/' + idPerson,
              params: params
            }}>
              Entrevistar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card