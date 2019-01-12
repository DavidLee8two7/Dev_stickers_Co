import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 4rem 0;
  border: 1px solid ${props => props.theme.red};
  font-weight: 600;
  & > * {
    margin: 0;
    padding: 15px 30px;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: gray;
    pointer-events: none;
  }
  @media screen and (max-width: 1200px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 900px) {
    margin: 2rem 0;
  }
  @media screen and (max-width: 600px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    .hide {
      display: none;
    }
  }
`;

export default PaginationStyles;
