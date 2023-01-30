import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

const Cite = require("citation-js");

const About = () => {
    const data = useStaticQuery(graphql`
        query BibQuery {
            file(name: { eq: "qe4nime" }, extension: { eq: "bib" }) {
                internal {
                    content
                }
            }
        }
    `);

    const bib = new Cite(data.file.internal.content);

    function filterByIdValues(values: any) {
        return bib.data.filter(function (item: any) {
            return values.includes(item["id"]);
        });
    }

    const cite = (keys: any) => {
        let filteredArray = filterByIdValues(keys);
        const output = new Cite(filteredArray);
        return output.format("citation", {
            format: "text",
        });
    };

    function printBib() {
        return bib.format("bibliography", {
            format: "html",
        });
    }

    function insertBreakBetweenDivs(html: any) {
        return html.replace(/<\/div>/g, " </div><br>");
    }

    function linkifyUrls(html: any) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return html.replace(urlRegex, function (url: any) {
            return `<a class="link-primary" href="${url}" target="_blank">${url}</a>`;
        });
    }

    return (
        <Container fluid as="section" className="bg-light" id="about">
            <Container className="px-0">
                <Row className="gx-5 py-5">
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
                        interaction.
                    </p>
                    <h4>What do we mean by "querying"?</h4>
                    <p>
                        Querying is a process of asking questions and seeking
                        answers. In this workshop, we will explore different
                        methods of enquiry as they have been used by the
                        organisers and invited speakers.
                    </p>
                    <hr className="my-4" />
                    <h3>Methodologies</h3>
                    <p>
                        Our workshop will be based on a series of short
                        presentations and a general discussion. We will explore
                        the following methodologies:
                    </p>
                    <h4>Somaesthetics</h4>
                    <p>
                        Somaesthetics {cite("shusterman2008")} is a term that
                        combines <em>soma</em>&#8212;our non-dualistic
                        subjective self, body, emotion, and thinking&#8212;and{" "}
                        <em>aesthetics</em>&#8212;as in our ability to
                        perceptually appreciate the world around us, what we
                        feel, hear, see and engage with {cite("hook2018a")}. It
                        has been proposed that soma design has an important and
                        distinctive role to play in the design of NIMEs that
                        emphasise the aesthetics of playing an instrument
                        alongside the generation of sound{" "}
                        {cite("martinezavila2020")}. It presents a novel
                        approach to NIME design which is grounded in the
                        performer’s subjective experience of their body in
                        performance {cite("cotton2021")}.
                    </p>
                    <h4>Micro-phenomenology</h4>
                    <p>
                        Micro-phenomenology {cite("petitmengin2006")} is a
                        qualitative method that is being used in HCI/design{" "}
                        {cite("prpa2020")} for articulating the nuances,
                        complexity and diversity of users' experiences beyond
                        surface descriptions. In NIME, it has been used to
                        research perception, and to understand interaction and
                        performance with digital musical instruments{" "}
                        {cite("nordmoen2022")}.
                    </p>
                    <h4>Dialogic design</h4>
                    <p>
                        Dialogic design {cite(["wright2018", "gatehouse2020a"])}{" "}
                        is a subset of participatory design (PD) which
                        highlights the significance of multidirectional flow of
                        ideas, getting back to PD’s radical origins of workplace
                        user involvement in Scandinavia. As a method in NIME, it
                        can be used to articulate the experience of the
                        performer and channel it into specific design decisions{" "}
                        {cite("zayas-garin2022")}.
                    </p>
                    <h4>Retrospective trioethnography</h4>
                    <p>
                        Rooted in autoethnography {cite("ellis2011")},
                        retrospective trioethnography {cite("howell2021")} is a
                        method in which design researchers turn the lens on
                        themselves and their design process, allowing first-hand
                        experience to spark new insights, treating subjectivity
                        and emotions as central to research. Particularly,
                        duoethnography and trioethnography are based on the
                        juxtaposition of the personal experiences of two or
                        three affined researchers, with emphasis given to the
                        dialogical relationship between their lived experiences.
                        Its potential for NIME is in its ability to challenge
                        existing narratives and discover new ways of reporting
                        on our design processes.
                    </p>
                    <hr className="my-4" />
                    <h3>References</h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: linkifyUrls(
                                insertBreakBetweenDivs(printBib())
                            ),
                        }}
                    />
                </Row>
            </Container>
        </Container>
    );
};

export default About;
