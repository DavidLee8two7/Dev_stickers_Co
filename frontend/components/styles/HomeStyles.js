import styled from "styled-components";

const HomeStyles = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 3rem;
  @media screen and (max-width: 950px) {
    grid-gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const IntroductionDiv = styled.div`
  margin: 0 auto 2.5rem auto;
  grid-row: 1;
  grid-column: 1 / -1;
  width: 100%;
  min-height: 10vw;
`;

const CompanyInfo = styled.div`
  z-index: 2;
  margin: 0 auto;
  padding: 2rem;
  width: max-content;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
  line-height: 1.4rem;
  font-family: ${props => props.theme.fontDisplay};
  color: ${props => props.theme.brown};
  text-shadow: 1px 1px 2px rgba(111, 111, 111, 0.75);
  h2 {
    font-size: 12rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  p {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1550px) {
    h2 {
      font-size: 10rem;
    }
    p {
      font-size: 2.4rem;
    }
  }
  @media screen and (max-width: 1350px) {
    h2 {
      font-size: 8rem;
    }
    p {
      font-size: 1.9rem;
    }
  }
  @media screen and (max-width: 1050px) {
    h2 {
      font-size: 7.2rem;
    }
    p {
      font-size: 1.7rem;
    }
  }
  @media screen and (max-width: 950px) {
    h2 {
      font-size: 6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 800px) {
    h2 {
      font-size: 4.8rem;
    }
  }
  @media screen and (max-width: 700px) {
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 3.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 515px) {
    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 450px) {
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 380px) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      display: none;
    }
  }
`;

const ClothingShop = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  height: 50rem;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(62, 39, 35, 0.35),
      rgba(62, 39, 35, 0.35)
    ),
    url("/static/img/sunset_beach.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  align-items: center;
  color: ${props => props.theme.offWhite};
  .mission {
    grid-column: 1 / -1;
  }
  h4 {
    margin: 2rem;
    font-size: 3.3rem;
    font-weight: 600;
  }
  ul {
    margin-left: 3rem;
    list-style: none;
    li {
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1550px) {
    h4 {
      font-size: 2.6rem;
    }
    ul {
      list-style: none;
      li {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    height: 40rem;
    h4 {
      font-size: 2.2rem;
    }
    ul {
      li {
        font-size: 1.7rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    height: 30rem;
    h4 {
      font-size: 1.8rem;
    }
    ul {
      margin-left: 1rem;
      li {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    h4 {
      font-size: 1.6rem;
    }
    ul {
      margin-left: 0;
      li {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    ul {
      display: none;
    }
  }
`;

const PrintingShop = styled.div`
  grid-row: 3;
  grid-column: 1 / -1;
  height: 50rem;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(62, 39, 35, 0.35),
      rgba(62, 39, 35, 0.35)
    ),
    url("/static/img/women_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
  color: ${props => props.theme.offWhite};
  ul {
    grid-column: 2;
    list-style: none;
    li {
      font-size: 3.4rem;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1550px) {
    ul {
      li {
        font-size: 3rem;
      }
    }
  }
  @media screen and (max-width: 1150px) {
    ul {
      li {
        font-size: 2.6rem;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    height: 40rem;
    ul {
      li {
        font-size: 2.2rem;
      }
    }
  }
  @media screen and (max-width: 950px) {
    height: 30rem;
    ul {
      li {
        font-size: 1.8rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    justify-items: center;
    ul {
      grid-column: 1 / -1;
      li {
        font-size: 1.6rem;
      }
    }
  }
  .custom_printing {
    grid-column: 1 / -1;
    justify-self: end;
    margin-top: 3rem;
    margin-right: 8rem;
    a {
      font-family: ${props => props.theme.fontDisplay};
      font-size: 4.2rem;
      padding: 2rem;
    }
    @media screen and (max-width: 1550px) {
      a {
        font-size: 3.6rem;
      }
    }
    @media screen and (max-width: 1150px) {
      margin-right: 6rem;
      a {
        font-size: 3rem;
      }
    }
    @media screen and (max-width: 950px) {
      a {
        font-size: 2.6rem;
      }
    }
    @media screen and (max-width: 700px) {
      a {
        padding: 1rem;
        font-size: 2.3rem;
      }
    }
    @media screen and (max-width: 515px) {
      a {
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 450px) {
      a {
        padding: 0.5rem;
        font-size: 1.8rem;
      }
    }
    @media screen and (max-width: 350px) {
      a {
        padding: 0.25rem;
        font-size: 1.6rem;
      }
    }
  }
`;

export { HomeStyles, IntroductionDiv, CompanyInfo, ClothingShop, PrintingShop };
