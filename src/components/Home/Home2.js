import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I actively seek professional development opportunities to enhance my skills in Mechanical and Electronics, 
              ensuring I stay at the forefront of industry advancements.
              <br />
              <br />My major strengths lies within areas like
              <i>
                <b className="purple"> CAD and Simulations, Mobile Robotics, C++ and PLC Programming and Pneumatics. </b>
              </i>
              <br />
              <br />
              My fields of interest are developing around &nbsp;
              <i>
                <b className="purple">Robotics and Automation Technologies</b> and
                also in areas related to&nbsp;
                <b className="purple">Sustainable Manufacturing.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing solutions 
               using <b className="purple">Arduino</b> and
              <i>
               <b className="purple"> Embedded Systems</b>
              </i>
              &nbsp; along with 
              <i>
                <b className="purple"> 3D Printing Technology</b>
              </i> 
              like 
              <i>
                <b className="purple"> SolidWorks and Fusion360.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Devvv20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ie.linkedin.com/in/dev-bhagat-593b45222"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devvv.20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
