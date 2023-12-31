import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: -2rem;
  width: 100%;
`;

export const College = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  
  .name{
    font-weight: 600;
    font-size: 1.2rem;
  }

  .branch{
    font-weight: 400;
  }

`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
