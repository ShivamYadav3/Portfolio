import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              "I'm a dedicated web developer 🤷‍♂️
              <br />
              <br />
              proficient in
              <i>
                <b className="purple"> HTML, CSS, JavaScript, and React.js </b>
              </i>
              <br />
              <br />
              My primary skill is <b className="purple">JavaScript/React.</b> I
              spend most days learning and building up, either start it from
              scratch or adding some customized features and functionality for
              outdated websites to make them shine again. &nbsp;
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Tailwind CSS</b> for efficient styling.
              and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Redux</b>
              </i>
              <br />
              <br />
              You can reach out to me at
              <br />
              <b className="purple">
                {" "}
                <AiOutlineMail />
                &nbsp; shivamyadav93000@gmail.com
                <br />
                <AiOutlineMobile />
                &nbsp; 8982296937
              </b>
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
                  href="https://github.com/ShivamYadav3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivamyadav3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
