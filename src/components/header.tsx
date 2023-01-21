import PropTypes from "prop-types"
import React from "react"

import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = ({ siteTitle } : any) => (
	<Navbar bg="primary" expand="lg" sticky="top" variant="dark">
      <Container className="w-75">
        <Navbar.Brand href="#home"><strong>{siteTitle}</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#organisers">Organisers</Nav.Link>
			<Nav.Link href="#submit">Submit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header