import React from "react";
import  cpp from "./SVG-img/cpp.svg";
import  css3 from "./SVG-img/css3.svg";
import  html5 from "./SVG-img/html5.svg";
import  git from "./SVG-img/git.svg";
import  js from "./SVG-img/javascript.svg";
import  react from "./SVG-img/react.svg";
import  responsive from "./SVG-img/responsive.svg";

import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  College,
  AboutWrapper
} from "./AboutElements";

import aboutImg from "../../Assets/about-img.png"

function About() {
  return (
    <AboutWrapper >
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={aboutImg}
            alt="Img"
          />
          <div className="AboutBio">
            Hello! My name is <strong>RiTik Bhateley</strong>. I am a Computer Engineering Student at Delhi 
            Technological University. I enjoy problem-solving and coding. Always strive to bring 100% to the 
            work I do. I have worked on technologies like HTML5, CSS, JavaScript, C++ during my bachelor's.
          </div>
          <College>
            <div class="name">
              Delhi Technological University
            </div>
            <div class="branch">
              Bachelor of Technology, Computer Engineering
            </div>
            <div>
              Dec 2020 - May 2024
            </div>
          </College>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
              <Tech index="1" className="tech">
                <TechImg src= {cpp} alt="C++" />
                <TechName>C++</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {html5} alt="HTML5" />
                <TechName>HTML5</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {css3} alt="css3" />
                <TechName>CSS</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {js} alt="JS" />
                <TechName>JavaScript</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {git} alt="git" />
                <TechName>Git</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {react} alt="React" />
                <TechName>React</TechName>
              </Tech>
              <Tech index="1" className="tech">
                <TechImg src= {responsive} alt="responsive" />
                <TechName>Responsive</TechName>
              </Tech>
            
          </Technologies>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
