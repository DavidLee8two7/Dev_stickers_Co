import styled from "styled-components";

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 2rem;
  }
  @media screen and (max-width: 550px) {
    img {
      width: 100%;
      height: 300px;
    }
    p {
      font-size: 1.6rem;
    }
  }
  .title {
    font-size: 3.4rem;
    color: ${props => props.theme.black};
    @media screen and (max-width: 750px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 2.4rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
  .price {
    font-size: 3.4rem;
    color: ${props => props.theme.black};
    @media screen and (max-width: 750px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 2.4rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightGray};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightGray};
    & > * {
      background: white;
      border: 0;
      font-size: 1.4rem;
      padding: 1rem;
    }
  }
`;

export default Item;
