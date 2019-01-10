import styled from "styled-components";

const FooterDiv = styled.footer`
  z-index: 3;
  grid-row: 8;
  grid-column: 1 / span 4;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.8rem;
  background: ${props => props.theme.brown};
`;

const LogoDiv = styled.div`
  text-align: center;
  width: 60%;
  transform: scale(1);
  transition: all 0.4s;
  img {
    width: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.07);
    }
  }
  &:hover img {
    transform: scale(1.07);
  }
  @media screen and (max-width: 750px) {
    grid-row: 1;
  }
`;

const ContactDiv = styled.div`
  width: 100%;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    grid-template-rows: 1fr;
  }
`;

const FooterNav = styled.div`
  display: inline-block;
  text-align: left;
  ul {
    list-style: none;
  }
  li {
    font-size: 2.2rem;
    font-weight: 600;
    display: inline-block;
    margin-right: 2.5rem;
  }
  a {
    color: white;
    font-size: 2.2rem;
    font-weight: 600;
    text-shadow: ${props => props.theme.ts};
    &:link,
    &:visited {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      font-weight: 600;
      color: ${props => props.theme.orange};
      box-shadow: 0 1rem 2rem rgba(orange, 0.4);
      transform: translateY(-1rem) rotate(3deg) scale(1.01);
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3.5rem;
  font-family: ${props => props.theme.fontDisplay};
  a {
    color: white;
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      color: ${props => props.theme.orange};
      box-shadow: 0 1rem 2rem rgba(orange, 0.4);
      transform: translateY(-1rem) rotate(3deg) scale(1.01);
    }
  }
  @media screen and (max-width: 750px) {
    font-size: 2rem;
    font-weight: 400;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export { FooterDiv, FooterNav, ContactDiv, LogoDiv, CopyRight };
