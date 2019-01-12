import styled from "styled-components";

const Supreme = styled.h3`
  background: ${props => props.theme.red};
  color: ${props => props.theme.black};
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 4rem;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
    padding: 2px 2.5px;
  }
`;

export default Supreme;
