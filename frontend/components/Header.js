import Link from "next/link";
import styled from "styled-components";
import NProgress from "nprogress";
import Router from "next/router";
import Nav from "./Nav";
import Cart from "./Cart";
import Search from "./Search";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 3;
  a {
    padding: 0.5rem 1rem;
    font-size: 2.8rem;
    font-family: ${props => props.theme.fontDisplay};
    color: white;
    text-shadow: 0.6px 0.6px 0.8px rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyleHeader = styled.header`
  .bar {
    background: ${props => props.theme.brown};
    border-bottom: 2px solid ${props => props.theme.lightGray};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    max-width: 1200px;
    margin: 2rem auto;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightGray};
  }
`;

const Header = () => (
  <StyleHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>T-shirts Factory Logo here</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </StyleHeader>
);

export default Header;
