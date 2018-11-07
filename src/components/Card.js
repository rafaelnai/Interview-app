import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {

  const {
    imagePath,
    content,
    idPerson,
    params,
    isBlocked
  } = props 

  const preStyle = {
    whiteSpace: 'inherit',
    minHeight: '45px'
  }

  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={imagePath} alt={content}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <pre style={preStyle}>{content}</pre>
          </div>
          <div className="card-action">
            { 
              !isBlocked ?
                <Link to={{
                  pathname: '/interview/' + idPerson,
                  params: params
                }}>
                  Entrevistar
                </Link>
              : <div>Já Entrevistado</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card