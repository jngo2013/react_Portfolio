import React from 'react';
import Photo from '../About/Photo/portfolioPhoto.jpg';
import "../FontawesomeIcons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Container } from "react-bootstrap";
function About(){
  return(
  <div>
    <div className="container contact-form">
      <h1 className="display-4">About Me</h1>
      <Container className="row">
        <Container className="col-3">
      {/* <div className="row"> */}
        <div>
          <img className="img-fluid" src={Photo} alt="Picture of me"/>
          </div>
          <a href="https://github.com/jngo2013" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://www.linkedin.com/in/jimmyngo95/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        </Container>
        <Container className="col-9">
        <p>Full Stack Web Developer with a background in customer service and management. I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension and am experienced in MERN stack (MongoDB, Express.js, React.js, and Node.js),HTML, CSS, and JavaScript. I managed a boba shop at the University of California, Berkeley campus for three years. During this time, I was able to gain more experience in managing multiple priorities, working with a team, making decisions, and communicating effectively. I bring a focus on user experience of websites and learning new frameworks for them.
        </p>
        
        <p>
        Being a manager has allowed me to constantly grow in many skills such as managing employees, communicating effectively, and solving problems efficiently. I aim to utilize every skill that I have obtained from my previous fields to be of value to the web development community.</p>
        </Container>
      {/* </div> */}
      </Container>
    </div>
  </div>

  )
}
export default About;