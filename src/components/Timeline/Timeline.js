import React, { Component } from 'react'

import './Timeline.css'

import { Col, Button, Row } from 'react-bootstrap'
import { renderToStaticMarkup } from 'react-dom/server'

import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

/**
 *
 * http://bestjquery.com/tutorial/timeline/demo63/
 * https://sweetalert.js.org/guides/
 *
 */

export default class Timeline extends Component {
  state = {
    show: false,
  }
  render() {
    return (
      <React.Fragment>
        <Col lg={12} className="mt-4 mb-4">
          <Row className="h-100 align-items-center">
            <div className="col-12 text-center">
              <Col lg={12} className="d-flex justify-content-center">
                <h1 className="title h3">Percurso académico e profissional</h1>
              </Col>
            </div>
          </Row>
        </Col>
        <Col lg={12} className="mt-4 mb-4">
          <div className="main-timeline p-4 shadow-sm">
            <div className="timeline">
              <Button className="timeline-content shadow" href="http://istec.pt" target="_blank">
                <div className="timeline-icon shadow">
                  <i className="fa fa-graduation-cap" />
                </div>
                <h3 className="title">2019 - NOW: ISTEC - CTeSP</h3>
                <p className="description">
                  Entrada para o Instituto Superior de Tecnologias Avançadas, ingressando o curso de{' '}
                  <em>
                    <b>Desenvolvimento para Dispositivos Móveis</b>
                  </em>
                </p>
              </Button>
            </div>
            <div className="timeline">
              <Button
                className="timeline-content shadow"
                onClick={() => this.setState({ show: true })}
              >
                <div className="timeline-icon shadow">
                  <i className="fa fa-award" />
                </div>
                <h3 className="title">2018: Conclusão secundário + estágio</h3>
                <p className="description">
                  Finalização do curso TGPSI - Técnico de Gestão e Programação de Sistemas
                  Informáticos bem como a finalização do estágio.
                  <b className="m-1 mt-1 bg-primary text-white p-1 border-success rounded">
                    Ver notas
                  </b>
                </p>
              </Button>
              <SweetAlert
                show={this.state.show}
                title="Notas finais"
                html
                text={renderToStaticMarkup(
                  <div className="text-center">
                    Nota final de curso:{' '}
                    <em>
                      <b>16 valores</b>
                    </em>
                    <br />
                    Nota final de estágio{' '}
                    <em>
                      <b>17 valores</b>
                    </em>
                    <br />
                    Nota do Projeto Final:{' '}
                    <em>
                      <b>20 valores</b>
                    </em>
                    <br />
                    Nota final de módulos:{' '}
                    <em>
                      <b>14,5 valores</b>
                    </em>
                    <br />
                  </div>,
                )}
                onConfirm={() => this.setState({ show: false })}
              />
            </div>
            <div className="timeline">
              <Button className="timeline-content shadow">
                <div className="timeline-icon shadow">
                  <i className="fa fa-briefcase" />
                </div>
                <h3 className="title">2018: Linkare TI - Trainee</h3>
                <p className="description">
                  Em 2018, dei entrada a empresa Linkare TI como Trainee executando as funções de:{' '}
                  <em>
                    <b>Programador Java, Administrador de Sistemas e DevOps</b>
                  </em>
                </p>
              </Button>
            </div>
            <div className="timeline">
              <Button className="timeline-content shadow" href="http://aelc.pt" target="_blank">
                <div className="timeline-icon shadow">
                  <i className="fas fa-play-circle" />
                </div>
                <h3 className="title">2015: ESLC - TGPSI</h3>
                <p className="description">
                  Em 2015, comecei esta grande aventura na programação neste Curso Profissional,
                  designado de{' '}
                  <em>
                    <b>Técnico de Gestão e Programação de Sistemas Informáticos</b>
                  </em>{' '}
                  - Leal da Câmara - Rio de Mouro
                </p>
              </Button>
            </div>
          </div>
        </Col>
      </React.Fragment>
    )
  }
}
