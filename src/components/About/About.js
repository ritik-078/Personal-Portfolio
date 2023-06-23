import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  College,
} from "./AboutElements";

import aboutImg from "../../Assets/about-img.png"

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={aboutImg}
            alt="Img"
          />
          <div className="AboutBio">
            Hello! My name is <strong>RiTik Bhateley</strong>. I am a senior at Delhi Technological University.
          </div>
          <College>
            <div class="name">
              Delhi Technological University
            </div>
            <div class="branch">
              Bachelor of Technology, Computer Engineering
            </div>
            <div>
              2020-2024
            </div>
          </College>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
