import styled from "styled-components";

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  transition: all ease 0.3s;
  box-shadow: ${props => props.theme.bs};
  a,
  button {
    font-family: ${props => props.theme.fontDisplay};
    background: ${props => props.theme.red};
    display: inline;
    line-height: 1.3;
    font-size: 2.4rem;
    text-align: center;
    color: ${props => props.theme.brown};
    padding: 1rem 1rem;
  }
  &:hover {
    transform: skew(0deg) rotate(0deg);
  }
`;

export default Title;
