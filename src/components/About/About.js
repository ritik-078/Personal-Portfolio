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
    <>
      <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150 shadow"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#f5f5ef"
            class="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
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
    </>
  );
}

export default About;
