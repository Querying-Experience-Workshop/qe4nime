import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cite = require("citation-js");

const bibFile = `
	@article{petitmengin2006,
		title = {Describing One's Subjective Experience in the Second Person: {{An}} Interview Method for the Science of Consciousness},
		shorttitle = {Describing One's Subjective Experience in the Second Person},
		author = {Petitmengin, Claire},
		year = {2006},
		month = dec,
		journal = {Phenomenology and the Cognitive Sciences},
		volume = {5},
		number = {3},
		pages = {229--269},
		issn = {1572-8676},
		doi = {10/d62mdz},
		abstract = {This article presents an interview method which enables us to bring a person, who may not even have been trained, to become aware of his or her subjective experience, and describe it with great precision. It is focused on the difficulties of becoming aware of one's subjective experience and describing it, and on the processes used by this interview technique to overcome each of these difficulties. The article ends with a discussion of the criteria governing the validity of the descriptions obtained, and then with a brief review of the functions of these descriptions.},
		langid = {english},
		file = {/Users/eevee/Zotero/storage/HMP698QZ/Petitmengin - 2006 - Describing one’s subjective experience in the seco.pdf}
	  }
	  `;

const bib = new Cite(bibFile);

const output = bib.format("citation", {
	template: "apa",
	format: "html",
});

console.log(output); // Prints some complicated string

const About = () => (
    <Container fluid as="section" className="bg-light" id="about">
        <Container className="px-0">
            <Row className="gx-5 py-5">
                <Col lg={8}>
                    <h2>About the Workshop</h2>
                    <p>First, let's unpack the title of the workshop:</p>
                    <h4>What do we mean by "experience"?</h4>
                    <p>
                        Experience is a complex and multi-faceted concept. It is
                        often used in HCI to refer to the subjective, personal,
                        and emotional aspects of interaction with technology.
                        However, it is also used in other disciplines, such as
                        psychology, to refer to the process of learning and
                        acquiring knowledge. In this workshop, we will explore
                        the different meanings of experience and how they relate
                        to the design of DMIs and HCI applied to musical
                        performance.
                    </p>
                    <h4>What do we mean by "querying"?</h4>
                    <p>
                        Querying is a process of asking questions and seeking
                        answers. In this workshop, we will explore different
                        methods of enquiry as they have been used by the
                        organisers and invited speakers.
                    </p>
                    <hr />
                    <h3>Methodologies</h3>
                    <p>
                        Our workshop will be based on a series of short
                        presentations and a general discussion. We will explore
                        the following methodologies:
                    </p>
                    <h4>Somaesthetics</h4>
                    <h4>Micro-phenomenology</h4>
                    <p>
                        Micro-phenomenology [@petitmengin2006; @prpa2020] is a
                        qualitative method that is being used in HCI/design for
                        articulating the nuances, complexity and diversity of
                        users' experiences beyond surface descriptions.
                    </p>
                    <h4>Dialogic design</h4>
                    <h4>Retrospective trioethnography</h4>
                    <hr />
                    <h3>References</h3>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </Container>
);

export default About;
