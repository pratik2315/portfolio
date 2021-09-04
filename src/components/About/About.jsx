import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    '"Software is a great combination between artistry and engineering"'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I believe that a good UI/UX is the soul of your App. UI/UX is not just about a Screen being designed in a beautiful way. A good UI/UX is something which helps Enhance the overall experience of the User on your Website or App'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I have diverse set of skills ranging from but not limited to Android + Java + Kotlin as well as HTML, CSS & Javascript, Other tools I use in my work Environment : Git & Github, FIGMA, Firebase Services, SQLite etc.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      My Linkedin
                    </a>
                  </span>
                )}
                
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
