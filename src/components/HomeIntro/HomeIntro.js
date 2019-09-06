import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './HomeIntro.css'

export default props => {

  return (
    <React.Fragment>
      <header className="intro" style={{ backgroundImage: `url(${props.background})` }}>
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col lg={12} className={`text-center ${props.color}`}>
              <h1 className="font-weight-light">Bruno Gabriel Nunes Martins</h1>
              <p className="lead">{props.title}</p>
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
