import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

import './App.css'

// Components import
import AppNavbar from '../Navbar/Navbar'

class App extends Component {
  state = {}
  render() {
    return (
      <div className="app-site">
        <header>
          <AppNavbar />
        </header>
        <main className="app-content">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <React.Fragment>
                    <Container>
                      <Row>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xl={4}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                Card Subtitle
                              </Card.Subtitle>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </React.Fragment>
                )}
              />
            </Switch>
          </Router>
        </main>
        <footer>bgabrielma.work - github.com/bgabrielma</footer>
      </div>
    )
  }
}

export default App
