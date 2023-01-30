import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Schedule = () => (
    <Container fluid as="section" id="schedule">
        <Container className="px-0 py-5">
            <h2>Schedule</h2>
            <Row className="gx-5">
                <Col lg={8}>
                    <p>
                        The half-day workshop will be hybrid on May 29, 2023 at
                        a time TBC. It will take place as follows:
                    </p>
                    <h6>Opening (30 minutes)</h6>
                    <p>
                        We will open with the workshop's motivation, agenda, and
                        introduction to the organizers and methodologies to be
                        discussed.
                    </p>
                    <h6>Speaker presentations (50 minutes)</h6>
                    <p>
                        We will then give the floor to our invited speakers to
                        present their work in somaesthetics,
                        micro-phenomenology, dialogic design and retrospective
                        trioethnography.
                    </p>
                    <h6>Participant introductions (30 minutes)</h6>
                    <p>
                        After the presentations, we will invite participants to
                        introduce themselves to get to know each other and their
                        research interests.
                    </p>
                    <h6>Methodology discussions (50 minutes)</h6>
                    <p>
                        We will discuss the methodologies presented by the
                        speakers and how they can be useful to NIME.
                    </p>
                    <h6>Mapping exercise (30 minutes)</h6>
                    <p>
                        Participants will be invited to create a map of their
                        own research interests and methodologies, as well as the
                        ones presented in the workshop, with special attention
                        to how the methodologies relate and complement each
                        other.
                    </p>
                    <h6>Breaks (10 minutes each)</h6>
                    <p>
                        Although we will encourage participants to take a break
                        whenever they need, we will schedule two 10-minute
                        breaks to allow participants time away from the
                        workshop.
                    </p>
                    <h6>Reflection and closing remarks (30 minutes)</h6>
                    <p>
                        At the end of the workshop, we will reflect on the day's
                        activities and learnings, and discuss how the workshop
                        can be improved for future editions. we will close by
                        identifying opportunities for collaboration and
                        discussion beyond the workshop.
                    </p>
                </Col>
                <Col>
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">Activity</th>
                                <th scope="col">Duration (minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Opening</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Speaker presentations</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Break</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Participant introductions</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Methodology discussions</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Break</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Mapping exercise</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Reflection and closing remarks</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Schedule;
