import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dev Bhagat </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently pursuing Masters in Mechatronics at University of Limerick, Ireland.
            <br />
            I have completed Bachelors (B.Tech) in Mechanical Engineering from Nirma University,
            India.
            <br />
            <br />
            Apart from academics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical Stuff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
