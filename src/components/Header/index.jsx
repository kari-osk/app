import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


function Header() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView()
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#080720' }} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand onClick={() => scrollToComponent('hero')}>Karina Osuka</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => scrollToComponent('project')}>Project</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent('posts')}>Post</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent('about')}>About me</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header
