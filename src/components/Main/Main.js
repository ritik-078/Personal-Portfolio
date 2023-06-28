import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import {
  MainContainer,
  MainWrapper,
  MainLeft,
  MainRight,
  Image,
  MainC,
} from "./MainElements";
import aboutImg from "../../Assets/about-img.png";

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      
      <MainContainer>
        <MainWrapper>
          
          <MainLeft>
            <h1>Ritik Bhateley</h1>
            <h5>Web Developer</h5>
            <p>Enthusiastic Computer Engineering student</p>
            <p>Aspiring Software Engineer.</p>
            <MainC>
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
            </MainC>
          </MainLeft>
          <MainRight>
            <Image
              src={aboutImg}
              alt="man-svgrepo"
            />
          </MainRight>
        </MainWrapper>
      </MainContainer>

    </main>
  );
}

export default Main;
