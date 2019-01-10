import styled from "styled-components";

const HomeStyles = styled.div`
  margin: 0 auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 1.5rem;
`;

const IntroductionDiv = styled.div`
  margin-top: 2rem;
  grid-column: 1 / -1;
  grid-row: 1;
  background-image: url("/static/img/sunset_beach.jpg");
  width: 100%;
  height: 37rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -250px;
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

const MenCloth = styled.div`
  grid-row: 2;
  grid-column: 1 / 3;
  min-height: 40rem;
  width: 100%;
  background-image: url("/static/img/men_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const WomenCloth = styled.div`
  grid-row: 2;
  grid-column: 3 / -1;
  min-height: 40rem;
  width: 100%;
  background-image: url("/static/img/women_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const KidsCloth = styled.div`
  grid-row: 3;
  min-height: 40rem;
  width: 100%;
  background-image: url("/static/img/men_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const SalesCloth = styled.div`
  grid-row: 3;
  min-height: 40rem;
  width: 100%;
  background-image: url("/static/img/women_clothing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export {
  HomeStyles,
  IntroductionDiv,
  CompanyInfo,
  MenCloth,
  WomenCloth,
  KidsCloth,
  SalesCloth
};
