import React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/seo"
import { Col, Container, Row } from 'react-bootstrap';


const IndexPage = () => (
  <Layout>
    <SEO />
    <Container>
	  <Row>
		<Col xs={8}>
			<h1>Welcome</h1>
			<p>With this workshop, we aim to bring together researchers with the common interest of querying, articulating and understanding experience in the context of New Interfaces for Musical Expression (NIME), and to jointly identify challenges, methodologies and opportunities in this space. Furthermore, we expect it to serve as a platform for strengthening the community of researchers working with qualitative and phenomenological methods around the design of DMIs and HCI applied to musical performance.</p>
		</Col>
		<Col>
			<StaticImage
			alt="An oil painting of a musician playing guitar"
			src="../images/musician.png"
			width={400}
		/>
		</Col>
	  </Row>
	</Container>
  </Layout>
)

export default IndexPage