import PropTypes from "prop-types"
import React from "react"

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const Header = ({ siteTitle } : any) => (
	<Navbar bg="primary" expand="lg" sticky="top" variant="dark">
			<Container>
				<Navbar.Brand href="#home" className="fw-semibold">{siteTitle}</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#schedule">Schedule</Nav.Link>
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