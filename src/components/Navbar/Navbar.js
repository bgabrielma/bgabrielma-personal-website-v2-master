import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'

import './Navbar.css'

import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

export default props => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">bgabrielma.work</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="#" eventKey="disabled" disabled>Serviços</Nav.Link>
            <Nav.Link href="./works">Os meus trabalhos</Nav.Link>
            <Nav.Link href="#" eventKey="disabled" disabled>Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <Navbar.Text style={{ color: 'white' }} className="mr-2">
                Pesquisar projetos:
              </Navbar.Text>
              <FormControl
                id="searchFormControl"
                className="mr-4"
                type="text"
                placeholder="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/bgabrielma" target="_blank" className="navbar-image">
              <Navbar.Brand>
                <img
                  src={github}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/bruno-martins-1289a8174/"
              target="_blank"
              className="navbar-image"
            >
              <Navbar.Brand>
                <img
                  src={linkedin}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
