import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import { Col, Container, Row } from "react-bootstrap";
import About from "./about";
import Schedule from "./schedule";
import People from "./people";
import Submission from "./submission";

const IndexPage = () => (
    <Layout>
        <SEO />
        <Container fluid id="home">
            <Container className="px-0 py-5">
                <h1>Welcome</h1>
                <Row className="gx-5">
                    <Col lg={7}>
                        <p className="lead">
                            This half-day workshop will take place in hybrid
                            format on May 29th, 2023, at the NIME conference in
                            Mexico City and online.
                        </p>
                        <p>
                            With this workshop, we aim to bring together
                            researchers with the common interest of querying,
                            articulating and understanding experience in the
                            context of New Interfaces for Musical Expression,
                            and to jointly identify challenges, methodologies
                            and opportunities in this space. Furthermore, we
                            hope it serves as a platform for strengthening the
                            community of researchers working with qualitative
                            and phenomenological methods around the design of
                            DMIs and HCI applied to musical interaction.
                        </p>
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
        <About />
        <Schedule />
        <People />
        <Submission />
    </Layout>
);

export default IndexPage;
