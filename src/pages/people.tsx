import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";

const People = () => (
    <Container fluid as="section" className="bg-light" id="people">
        <Container className="px-0 py-5">
            <h2>Organisers</h2>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Courtney Nicole Reed"
                        className="rounded-circle"
                        src="../images/courtney.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://courtneynreed.wordpress.com/"
                            target="_blank"
                        >
                            Courtney N. Reed
                        </a>{" "}
                        is a vocalist and Postdoctoral Research Assistant in
                        Design Analytics and Music Physiology in the School of
                        Biomedical Engineering & Imaging Sciences at King's
                        College London. Her research focuses on externalising
                        internal sensory feedback, control dynamics between the
                        musician and their musical body, and how music and
                        physiology shape each other.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Eevee Zayas-Garin"
                        className="rounded-circle"
                        src="../images/eevee.jpeg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://eeveezayas.com/"
                            target="_blank"
                        >
                            Eevee Zayas-Garin
                        </a>{" "}
                        is a PhD student at Queen Mary University of London.
                        They are a design engineer and musician who also
                        explores the mediums of poetry and photography. Their
                        research focuses on accessibility, lived experience and
                        replicability in digital musical instrument design.
                        Drawing from disability justice perspectives, they work
                        towards developing NIME practice-based research methods
                        that engage with matters of access, dialogic design and
                        instrument longevity.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Andrew McPherson"
                        className="rounded-circle"
                        src="../images/andrew.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://andrewmcpherson.org/"
                            target="_blank"
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
            <h2>Featured speakers</h2>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Kelsey Cotton"
                        className="rounded-circle"
                        src="../images/kelsey.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://www.kelseycotton.com/"
                            target="_blank"
                        >
                            Kelsey Cotton
                        </a>{" "}
                        is a vocalist-artist-mover working with experimental
                        music, Musical Artificial Intelligence, electronic
                        textiles, soft-robotics, and Human-Computer Interaction.
                        As a researcher, Kelsey is fascinated with pushing the
                        limits of musical bodies, with her recent work delving
                        deeper into designing artifacts which harness, augment
                        and fuse different physiologies. She is passionate about
                        somatic interaction, the potential for intersomatic
                        experiences between fleshy and synthetic bodies, and
                        first-person feminist perspectives of musical AI. Kelsey
                        is currently undertaking PhD studies in Interactive
                        Music and AI at Chalmers University of Technology in
                        Gothenburg, Sweden.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    <StaticImage
                        alt="Portrait photo of Noura Howell"
                        className="rounded-circle"
                        src="../images/noura.jpg"
                        width={220}
                    />
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://nourahowell.com/"
                            target="_blank"
                        >
                            Noura Howell
                        </a>{" "}
                        is an Assistant Professor in Digital Media at Georgia
                        Tech. Her design research explores embodied, emotional,
                        sonic interactions with biodata——data about people’s
                        bodies and behaviors. Working with heat, sound, and
                        vibration, her work investigates ways of knowing, ways
                        of feeling, and ways of listening with biodata. What can
                        (and can’t) biodata infer about how we feel, and how
                        might engagements with biodata influence how we feel?
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    {/* <StaticImage
                        alt="Portrait photo of Juan Pablo Martinez Avila"
                        className="rounded-circle"
                        src=""
                        width={220}
                    /> */}
                </Col>
                <Col>
                    <p>
                        <a
                            className="link-primary"
                            href="https://zavilaz.wordpress.com/"
                            target="_blank"
                        >
                            Juan Pablo Martinez Avila
                        </a>{" "}
                        is a Computer Science PhD student at the Mixed Reality
                        Laboratory at the University of Nottingham, UK. His
                        research is focused on HCI, ethnography, and multimodal
                        interaction, specifically oriented in somaesthetic
                        design and augmenting guitars for performance
                        preparation.
                    </p>
                </Col>
            </Row>
            <Row className="gx-5 py-3">
                <Col className="mb-4" lg={4}>
                    {/* <StaticImage
                        alt="Portrait photo of Cally Gatehouse"
                        className="rounded-circle"
                        src=""
                        width={220}
                    /> */}
                </Col>
                <Col>
                    <p>
                        Cally Gatehouse is a Lecturer, HEA Fellow, designer, and
                        researcher at the School of Design, Northumbria
                        University. Cally’s interest is in the distinctive kinds
                        of knowledge that design can produce and how that can
                        help designers, researchers and citizens to navigate and
                        understand a world shaped by network technology. Cally’s
                        work incorporates a background in graphic and
                        communication design, drawing on a range of
                        post-solutionist design practices and feminist STS to
                        consider how design research practices can find ways to
                        forging commitments to complex problems which resist
                        easy resolution.
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default People;
