import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './HomeIntro.css'

import background from '../../assets/background-intro.svg'

export default () => {
  return (
    <React.Fragment>
      <header className="intro" style={{ backgroundImage: `url(${background})` }}>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="font-weight-light">Bruno Gabriel Nunes Martins</h1>
              <p className="lead">Website pessoal para fins profissionais</p>
              <p className="lead">
                <em>{`- in #DevWorld`}</em>
              </p>
            </Col>
          </Row>
        </Container>
      </header>
    </React.Fragment>
  )
}
