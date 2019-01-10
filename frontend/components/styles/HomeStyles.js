import styled from "styled-components";

const HomeStyles = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 1.5rem;
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
`;

const ClothingShop = styled.div`
  grid-row: 2;
  grid-column: 1 / -1;
  min-height: 50rem;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    ),
    url("/static/img/sunset_beach.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  align-items: center;
  color: ${props => props.theme.black};
  h4 {
    margin-left: 3rem;
    font-size: 3.6rem;
  }
  h5 {
    margin-left: 5rem;
    font-size: 3.6rem;
  }
  p {
    text-align: center;
    color: white;
    font-size: 2.2rem;
  }
  button {
    background: ${props => props.theme.offWhite};
    color: black;
    padding: 1.5rem auto;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const PrintingShop = styled.div`
  grid-row: 3;
  grid-column: 1 / -1;
  min-height: 50rem;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    ),
    url("/static/img/women_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  color: ${props => props.theme.offWhite};
  h2 {
    font-family: ${props => props.theme.fontSecondary};
  }
`;

export { HomeStyles, IntroductionDiv, CompanyInfo, ClothingShop, PrintingShop };
