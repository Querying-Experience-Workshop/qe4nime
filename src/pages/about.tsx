import React from "react"
import { Col, Container, Row } from 'react-bootstrap';

const About = () => (
<Container fluid as="section" className="bg-light" id="about">
		<Container className="px-0">
			<Row className="gx-5 py-5">
				<Col lg={8}>
					<h2>About the Workshop</h2>
					<p>First, let's unpack the title of the workshop:</p>
					<h4>What do we mean by "experience"?</h4>
					<p>Experience is a complex and multi-faceted concept. It is often used in HCI to refer to the subjective, personal, and emotional aspects of interaction with technology. However, it is also used in other disciplines, such as psychology, to refer to the process of learning and acquiring knowledge. In this workshop, we will explore the different meanings of experience and how they relate to the design of DMIs and HCI applied to musical performance.</p>
					<h4>What do we mean by "querying"?</h4>
					<p>Querying is a process of asking questions and seeking answers. In this workshop, we will explore different methods of enquiry as they have been used by the organisers and invited speakers.</p>
					<hr />
					<h3>Methodologies</h3>
					<p>Our workshop will be based on a series of short presentations and a general discussion. We will explore the following methodologies:</p>
					<h4>Somaesthetics</h4>
					<h4>Micro-phenomenology</h4>
					<h4>Dialogic design</h4>
					<h4>Retrospective trioethnography</h4>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	</Container>	
)

export default About
