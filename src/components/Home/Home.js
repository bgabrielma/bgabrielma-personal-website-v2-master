import React from 'react'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import angular from '../../assets/angular.svg'
import java from '../../assets/java.svg'
import react from '../../assets/react.svg'
import php from '../../assets/php.svg'
import mysql from '../../assets/mysql.svg'
import csharp from '../../assets/csharp.svg'
import codeigniter from '../../assets/codeigniter.svg'
import bootstrap from '../../assets/bootstrap.svg'
import docker from '../../assets/docker.svg'
import linux from '../../assets/linux.svg'
import javascript from '../../assets/js.svg'

import './Home.css'

import backgroundSkills from '../../assets/background-skills.svg'
import background from '../../assets/background-intro.svg'

// Home components
import HomeIntro from '../HomeIntro/HomeIntro'
import Timeline from '../Timeline/Timeline'

export default () => {
  return (
    <React.Fragment>
      <HomeIntro 
        title='Website pessoal para fins profissionais'
        background={background}
        color='text-light' />
      <div className="separator-frame sf-color-lightblue" />
      <div className="home-main-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" />
            <Timeline />
          </div>
        </div>
      </div>
      <div className="separator-frame sf-color-lightblue" />
      <div className="skills" style={{ backgroundImage: `url(${backgroundSkills})` }}>
        <Container fluid="true" className="skills-area">
          <Row className="text-center">
            <Col lg={12} className="d-flex justify-content-center">
              <h1 className="title">Competências</h1>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={angular} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Angular
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={react} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  React.js
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={java} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Java
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={php} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  PhP
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={mysql} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  MySQL
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={csharp} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  C#
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={codeigniter} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  CodeIgniter
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={bootstrap} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Bootstrap
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={docker} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Docker
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={linux} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Linux
                </Button>
              </Col>
            </Col>
            <Col lg={2} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="skill-image shadow-sm" src={javascript} />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  JavaScript
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator-frame sf-color-lightblue" />
    </React.Fragment>
  )
}
