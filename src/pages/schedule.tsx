import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Schedule = () => (
    <Container fluid as="section" id="schedule">
        <Container className="px-0 py-5">
            <h2>Schedule</h2>
            <Row className="gx-5">
                <Col lg={7}>
                    <p>
                        The half-day workshop will be hybrid on May 29, 2023.
                        The workshop will take place in the second half of the
                        day, from 13:00 - 17:00 local time in Mexico City
                        (GMT-6). The time is TBC and may be slightly amended
                        leading up to the conference.
                    </p>
                    <p>The workshop will take place as follows:</p>
                    <h6>Opening (20 minutes)</h6>
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
                    <h6>Taster session (60 minutes)</h6>
                    <p>
                        We will run two parallel activities so that participants
                        can spend time getting to know the methods they are most
                        interested in through first-hand experience. The
                        workshop organisers and Featured Speakers will lead
                        activities so the small groups can experience working
                        with these methods and see how experience is queried.
                    </p>
                    <p>
                        These activities will be later finalised by the
                        organisers and speakers, but will likely include
                        somaesthetic exercises such as body mapping, scanning,
                        and deautomatisation, experiencing being interviewed
                        through micro-phenomenologically-inspired interviews,
                        and engaging in short dialogic designs and
                        trioethnographic reflections.
                    </p>
                    <h6>Next steps (30 minutes)</h6>
                    <p>
                        Participants will be invited to create a map of their
                        own research interests and methodologies, as well as the
                        ones presented in the workshop, with special attention
                        to how the methodologies relate and complement each
                        other. In groups, we will form ideas and concrete steps
                        to further the knowledge taken from this workshop in our
                        own research.
                    </p>
                    <h6>Breaks (10 minutes each)</h6>
                    <p>
                        Although we will encourage participants to take a break
                        whenever they need, we will schedule two 10-minute
                        breaks to allow participants time away from the workshop
                        and get to know each other more.
                    </p>
                    <h6>Reflection and closing remarks (30 minutes)</h6>
                    <p>
                        At the end of the workshop, we will reflect on the day’s
                        activities and what was learned and take next steps to
                        build a research community around these methods within
                        NIME. We will ensure documentation of sources and
                        information shared during the workshop in a shared
                        repository, for future use. We will also discuss how the
                        workshop can be improved for future editions and how
                        this information can be shared with others in NIME. We
                        will close by identifying opportunities for
                        collaboration and discussion beyond the workshop.
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
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Speaker presentations</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Participant introductions</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Break</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Taster session</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Next steps</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Break</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Reflection and closing</td>
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
