import React from 'react'

import './NotFound.css'

import backgroundNotFound from '../../assets/errornotfound.svg'

export default () => {
  return (
    <div className="notfound" style={{ backgroundImage: `url(${backgroundNotFound})` }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light">Oops...</h1>
            <p className="lead">Esta página não existe ou está indisponível :(</p>
            <p className="lead">github.com/bgabrielma</p>
          </div>
        </div>
      </div>
    </div>
  )
}
