import React from 'react'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import angular from '../../assets/angular.png'
import java from '../../assets/java.png'
import react from '../../assets/react.png'
import php from '../../assets/php.png'
import mysql from '../../assets/mysql.png'
import csharp from '../../assets/csharp.png'
import nodejs from '../../assets/node.png'
import codeigniter from '../../assets/codeigniter.png'
import bootstrap from '../../assets/bootstrap.png'
import docker from '../../assets/docker.png'
import linux from '../../assets/linux.png'

import './Home.css'

export default () => {
  return (
    <React.Fragment>
      <div className="skills">
        <Container fluid="true">
          <Row>
            <Col lg={12} className="d-flex justify-content-center mb-4 mt-4">
              <h1 className="title">Competências</h1>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250 " src={angular} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Angular
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4 ajust-center">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo350" src={react} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  React e React-Native
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4 ajust-center">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo150" src={java} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Java
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4 ajust-center">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={php} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  PhP
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={mysql} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  MySQL
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={csharp} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  C#
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={nodejs} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Node.js *Básico
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image style={{ width: '180px', height: '250px' }} src={codeigniter} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  CodeIgniter
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={bootstrap} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Bootstrap
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={docker} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Docker *Intermédio
                </Button>
              </Col>
            </Col>
            <Col lg={3} className="mt-4">
              <Col lg={12} className="d-flex justify-content-center">
                <Image className="logo250" src={linux} fluid />
              </Col>
              <Col lg={12} className="mt-4 d-flex justify-content-center">
                <Button variant="outline-website" className="shadow-sm">
                  Linux *Intermédio
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="shadow-sm separator-frame sf-color-lightblue" />
    </React.Fragment>
  )
}
