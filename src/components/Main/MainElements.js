
import styled from "styled-components";

export const MainContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    padding-top: 9rem;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1112px) {
    flex-direction: column;
  }
`;

export const MainC = styled.div`
  display: flex;
  flex-direction: row;

  a {
    font-size: 2.7rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    margin-top: 2rem;
    margin-right: 3rem;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 3.2rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    margin-bottom: 2rem;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 1112px) {
    text-align: center;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

export const MainRight = styled.div`
  flex: 1;
  justify-content: end;
  display: flex;
  @media screen and (max-width: 1112px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: 330px;
  width: auto;
  @media screen and (max-width: 1024px) {
    height: 250px;
  }
`;