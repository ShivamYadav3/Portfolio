import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Yadav </span>
            from <span className="purple"> Jabalpur, India.</span>
            <br /> A skilled web developer having 3 years of experience in
            developing customer-facing frontend applications.
            <br />
            Additionally, I am currently employed as a software developer at
            Nuvolo.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; Gyming
            </li>
            <li className="about-activity">
              <ImPointRight />
              &nbsp; Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
