import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GitHub from "../../Assets/Projects/GitHub.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Myntra from "../../Assets/Projects/Myntra.png";
import Urbanclap from "../../Assets/Projects/Urbanclap.png";
import Snapdeal from "../../Assets/Projects/Snapdeal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              title="Netflix"
              description="I've developed a Netflix replica using ReactJS and integrated it with the TMDB API for accessing movie data. Additionally, I've incorporated the YouTube API to play the corresponding movie trailers within the application, To fetch data from the API, I utilized Axios....."
              ghLink="https://github.com/ShivamYadav3/Netflix-clone/tree/main/netflix-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GitHub}
              title="Github-Profiler"
              description="I have completed a project utilizing ReactJS where I integrated a GitHub profile access feature. Users are able to access their GitHub information by entering their GitHub ID. The displayed information includes their name, city, bio, followers, following count, and a list of their repositories."
              ghLink="https://github.com/ShivamYadav3/GitHub-Profile-Viewer/tree/main/github-profiler"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Urbanclap}
              title="Urban-Clap"
              description="I've created an all-in-one service booking platform for customers to effortlessly find and schedule services. We offer a diverse range of services, from salon appointments, massages, plumbing, electrical, and home cleaning, providing a seamless and convenient booking experience."
              ghLink="https://github.com/ShivamYadav3/major-Project/tree/main/my-project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapdeal}
              title="Snapdeal"
              description="I've developed a static Snapdeal replica using HTML5, CSS3, and JavaScript, with styling improvements made possible through the use of the Tailwind CSS library. This replica closely mirrors the visual design and layout of a Snapdeal webpage, though it lacks dynamic functionality."
              ghLink="https://github.com/ShivamYadav3/Snapdeal-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Myntra}
              title="Myntra"
              description="I've created a static Myntra replica using HTML5, CSS3, and JavaScript. Tailwind CSS was employed as a CSS library to enhance the styling of the page. This replica emulates the appearance and layout of a Myntra webpage without dynamic functionality."
              ghLink="https://github.com/ShivamYadav3/Myntra_clone"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YouTube}
              title="YouTube"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              demoLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
