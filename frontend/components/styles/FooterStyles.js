import styled from "styled-components";

const FooterDiv = styled.footer`
  z-index: 3;
  grid-row: 8;
  grid-column: 1 / span 4;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: ${props => props.theme.brown};
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

const Address = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.offWhite};
  font-size: 2.5rem;
  @media screen and (max-width: 1250px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1150px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 950px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.1rem;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.offWhite};
  font-size: 2.5rem;
  a {
    color: ${props => props.theme.yellow};
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      color: ${props => props.theme.offWhite};
      box-shadow: 0 1rem 2rem rgba(white, 0.4);
      transform: translateY(-1rem) rotate(3deg) scale(1.01);
    }
  }
  @media screen and (max-width: 1250px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1150px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 950px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.1rem;
  }
`;

export { FooterDiv, Address, CopyRight };
