import React from "react";
import { ContactWrapper, Email, LinkedIn } from "./ContactElements";
import { FaLinkedin,FaGithub } from "react-icons/fa";


function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email> 
            <span>ritikbhateley@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:ritikbhateley@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
          <LinkedIn>
            <a
              href="https://www.linkedin.com/in/ritik-bhateley/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ritik-078/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </LinkedIn>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
