import React from "react";
import styled from "styled-components";
import img from "../Footer/footer_img.svg"

const FooterSection = styled.div`
  background-size: cover;
  width: 100%;
  height: 150px;
  position: relative;
  img{
    height: 150px;
  
  }
  span {
    position: absolute;
    left: 3rem;
    bottom: 2rem;
    color: white;
    
  }
  
  }
`;
function Footer() {
  return (
    <FooterSection>
      <img src={img} alt="IMG"></img>
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
    </FooterSection>
  );
}

export default Footer;
