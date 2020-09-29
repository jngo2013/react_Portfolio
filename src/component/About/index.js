import React from 'react';
import Photo from '../About/Photo/portfolioPhoto.jpg';
import "../FontawesomeIcons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function About(){
  return(
  <div>
    <div className="container contact-form">
      <h1 className="display-4">About Me</h1>
      <div className="row">
        <div className="col-3">
          <img className="img-fluid" src={Photo} alt="Picture of me"/>
          </div>
        <p className="col-9">Full Stack Web Developer with a background in customer service and management. I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension and am experienced in MERN stack (MongoDB, Express.js, React.js, and Node.js),HTML, CSS, and JavaScript. I managed a boba shop at the University of California, Berkeley campus for three years. During this time, I was able to gain more experience in managing multiple priorities, working with a team, making decisions, and communicating effectively. I bring a focus on user experience of websites and learning new frameworks for them.
        </p>
        <a href="https://github.com/jngo2013" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <p>
        Being a manager has allowed me to constantly grow in many skills such as managing employees, communicating effectively, and solving problems efficiently. I aim to utilize every skill that I have obtained from my previous fields to be of value to the web development community.</p>
      </div>
      
    </div>
  </div>

  )
}
export default About;