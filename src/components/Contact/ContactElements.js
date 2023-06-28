import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 10rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 2rem;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    &:hover {
      font-weight: 420;
    }
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    span {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;

export const LinkedIn = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
  a {
    font-size: 3rem;
    color: #000009;
    transition: 0.2s ease-in;
    margin-top: 2rem;
    margin-right: 3rem;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }
  
`;