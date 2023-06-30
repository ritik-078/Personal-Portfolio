import React from "react";
import styled from "styled-components";
import img from "../Footer/footer_img.svg";
import bye from "./bye.gif";

const FooterSection = styled.div`
  display:flex;
  width: 100%;
  height: 250px;
  position: relative;
  span {
    font-size: 2rem;
    position: absolute;
    left: 3rem;
    bottom: 2rem;
    color: white;
  
  }
  .bye{
    height: 150px;
    position: absolute;
    right: 3rem;
    bottom: 1rem;
  }

  @media (max-width: 850px) {
    height: 100px;
   background-color: black;
   .bg{
    visibility: hidden;
   }
    span {
      font-size: 1rem;
      position: absolute;
      left: 1rem;
      bottom: 2.5rem;
      color: white;
    
    }
    .bye{
      height: 80px;
      position: absolute;
      right: 2rem;
      bottom: 1rem;
    }
  }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <img class="bg" src={img} alt="IMG"></img>
      <span>
          Coded by{" "}
          <a
            href="https://github.com/ritik-078/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ritikbhateley
          </a>{" "}
        </span>
        <img class="bye" src={bye} alt="bye"></img>
    </FooterSection>
  );
}

export default Footer;
