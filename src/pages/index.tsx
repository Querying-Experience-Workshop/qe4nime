import React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/seo"
import { Col, Container, Row } from 'react-bootstrap';


const IndexPage = () => (
  <Layout>
    <SEO />
	<Container fluid>
		<Container className="px-0">
		<Row className="gx-5 py-5">
			<Col lg={8}>
				<h1>Welcome</h1>
				<p>With this workshop, we aim to bring together researchers with the common interest of querying, articulating and understanding experience in the context of New Interfaces for Musical Expression (NIME), and to jointly identify challenges, methodologies and opportunities in this space. Furthermore, we expect it to serve as a platform for strengthening the community of researchers working with qualitative and phenomenological methods around the design of DMIs and HCI applied to musical performance.</p>
			</Col>
			<Col>
				<StaticImage
				alt="An oil painting of a musician playing guitar"
				src="../images/musician.png"
			/>
			</Col>
		</Row>
		</Container>
	</Container>
	<Container fluid className="bg-light">
		<Container className="px-0">
		<Row className="gx-5 py-5">
		<Col lg={8}>
			<h2>About the Workshop</h2>
			<p>First, let's unpack the title of the workshop:</p>
			<h3>What do we mean by "experience"?</h3>
			<p>Experience is a complex and multi-faceted concept. It is often used in HCI to refer to the subjective, personal, and emotional aspects of interaction with technology. However, it is also used in other disciplines, such as psychology, to refer to the process of learning and acquiring knowledge. In this workshop, we will explore the different meanings of experience and how they relate to the design of DMIs and HCI applied to musical performance.</p>
			<h3>What do we mean by "querying"?</h3>
			<p>Querying is a process of asking questions and seeking answers. In this workshop, we will explore different methods of enquiry as they have been used by the organisers</p>
		</Col>
		<Col></Col>
	  </Row>
		</Container>
	</Container>
  </Layout>
)

export default IndexPage