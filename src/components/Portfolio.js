import { Container, Row, Col, Tab } from "react-bootstrap";
import { PortfolioCard } from "./Portfolio-Card";
import projImg1 from "../assets/img/calcare.png";
import projImg2 from "../assets/img/chesaa.jpg";
import projImg3 from "../assets/img/dailyreport.png";
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {

  const projects = [
    {
      title: "UI/UX Design",
      description: "Design Web Development Calcare",
      imgUrl: projImg1,
    },
    {
      title: "Chatbot",
      description: "Chatbot CHESA (heck Health Secretary) Mobile",
      imgUrl: projImg2,
    },
    {
      title: "Web Development",
      description: "Sistem Pengelolaan Daily Report STMIK Bandung",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Ini adalah beberapa Project yang telah saya buat</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <PortfolioCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
