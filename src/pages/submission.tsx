import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Submission = () => {
    return (
        <Container fluid as="section" id="submission">
            <Container className="px-0 py-5">
                <h2>Submission</h2>
                <p>
                    We invite researchers, designers, practitioners and
                    community members to submit materials that refect their
                    interest in the aforementioned topics. These materials may
                    be one of the following:
                </p>
                <ul>
                    <li>300-word abstract</li>
                    <li>1-2 page statement of interest or position paper</li>
                    <li>Short video (45 seconds to 3 minutes)</li>
                    <li>Blog post</li>
                    <li>Pictorial</li>
                </ul>
                <p>
                    Accepted submissions will be featured on the workshop’s
                    website.
                </p>
                <Button
                    href="mailto:courtney.reed@kcl.ac.uk,e.zayasgarin@qmul.ac.uk?subject=QE4NIME Submission"
                    variant="outline-secondary"
                >
                    Submit
                </Button>
            </Container>
        </Container>
    );
};

export default Submission;
