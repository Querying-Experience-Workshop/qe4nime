import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Image, Row } from "react-bootstrap";

const Organisers = () => (
    <Container fluid as="section" className="bg-light" id="organisers">
        <Container className="px-0 py-5">
            <h2>Organisers</h2>
            <Row className="gx-5 py-3">
                <Col className="d-flex justify-content-center mb-4" lg={3}>
                    <StaticImage
                        alt="Portrait photo of Courtney Nicole Reed"
                        className="rounded-circle"
                        src="../images/courtney.jpg"
                        width={189}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://courtneynreed.wordpress.com/"
                        >
                            Courtney Nicole Reed
                        </a>{" "}
                        is a postdoctoral researcher at King's College London.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="d-flex justify-content-center mb-4" lg={3}>
                    <StaticImage
                        alt="Portrait photo of Eevee Zayas-Garin"
                        className="rounded-circle"
                        src="../images/eevee.jpeg"
                        width={189}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://eeveezayas.com/"
                        >
                            Eevee Zayas-Garin
                        </a>{" "}
                        is a PhD student at Queen Mary University of London.
                        They are a design engineer and musician who also
                        explores the mediums of poetry and photography. Their
                        research focuses on accessibility, lived experience and
                        replicability in digital musical instrument design.
                        Drawing from disability justice perspectives, they work
                        towards developing NIME research methods that engage
                        with matters of access, articulating experience and
                        instrument longevity.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="d-flex justify-content-center mb-4" lg={3}>
                    <StaticImage
                        alt="Portrait photo of Andrew McPherson"
                        className="rounded-circle"
                        src="../images/andrew.jpg"
                        width={189}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://andrewmcpherson.org/"
                        >
                            Andrew McPherson
                        </a>{" "}
                        is a Professor of Design Engineering and Music in the
                        Dyson School of Design Engineering, Imperial College
                        London, where he leads the Augmented Instruments
                        Laboratory. He is a computing researcher, composer,
                        electronic engineer, and musical instrument designer.
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Organisers;
