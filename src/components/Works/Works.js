import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import HomeIntro from '../HomeIntro/HomeIntro'
import './Works.css'

import background from '../../assets/background-works.svg'

/**
 * * Project images import
 */

import TrainEnergyProject from '../../design/projects/trainenergy-master-banner.png'

const sample = 'https://image.freepik.com/free-vector/green-abstract-modern-business-card-design_1017-18479.jpg'
const sample2 = 'http://topnewstoday.co/wp-content/uploads/2019/04/business-card-sample-design-business-card-sample-design-business-card-sample-designs-unique-professional-business-card-design-templates-for-free-business-card-sample-design-business-card-design-sample.jpg'
const sample3 = 'https://portefolio-master.000webhostapp.com/docs/bg.png'

export default () => {
  return (
    <React.Fragment>
      <HomeIntro
        title='Projetos realizados entre 2015 e agora'
        background={background}
        color='text-dark'
      />
      <div className="separator-frame sf-color-lightblue" />
      <div className="work-container">
        <Container>
          <Row className="text-center">
            <Col lg={12} className="d-flex justify-content-center mt-4">
              <h1 className="title">Projetos desenvolvidos</h1>
            </Col>
            <Col lg={12} className="d-flex justify-content-center mt-4 mb-4">
              <h3>Layout em construção...</h3>
            </Col>
            <Col lg={12} className="d-flex justify-content-center mb-4">
              <h6>Ultima atualização: 16 Ago 2019 01:52</h6>
            </Col>
            <Col lg={6} className="mt-4">
              <Card className="text-dark work-card shadow-lg"
                onClick={() => window.open('http://papserver.aelc.pt/~Bruno32956/ProjetoPAP/TrainEnergy-master/')}>
                <Card.Img src={TrainEnergyProject} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="text-area">
                    <Card.Title>TrainEnergy</Card.Title>
                    <div className="description">
                      <Card.Text>
                        <strong>Simulação de uma loja online de produtos.</strong>
                      </Card.Text>
                      <hr />
                      <Card.Text>
                        Prova de Aptidão Profissional realizada no 12º ano.</Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col lg={6} className="mt-4">
              <Card className="text-dark work-card shadow-lg">
                <Card.Img src={sample2} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="text-area">
                    <Card.Title>Card title</Card.Title>
                    <div className="description">
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                      <hr />
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col lg={6} className="mt-4">
              <Card className="text-dark work-card shadow-lg">
                <Card.Img src={sample2} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="text-area">
                    <Card.Title>Card title</Card.Title>
                    <div className="description">
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                      <hr />
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col lg={6} className="mt-4">
              <Card className="text-dark work-card shadow-lg">
                <Card.Img src={sample3} alt="Card image" />
                <Card.ImgOverlay>
                  <div className="text-area">
                    <Card.Title>Card title</Card.Title>
                    <div className="description">
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                      <hr/>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
