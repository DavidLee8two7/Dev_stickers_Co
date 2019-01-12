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
  margin-left: 2rem;
  position: relative;
  z-index: 3;
  a {
    padding: 0.5rem 1rem;
    font-size: 4.8rem;
    font-family: ${props => props.theme.fontDisplay};
    color: ${props => props.theme.offWhite};
    text-shadow: 0.6px 0.6px 0.8px rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1350px) {
    margin: 0;
    text-align: center;
    a {
      font-size: 4rem;
    }
  }
  @media (max-width: 1050px) {
    a {
      font-size: 3.2rem;
    }
  }
  @media (max-width: 800px) {
    a {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 550px) {
    a {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 350px) {
    a {
      font-size: 1.5rem;
    }
  }
`;

const StyleHeader = styled.header`
  margin: 0 auto 2rem auto;
  .bar {
    background: ${props => props.theme.brown};
    border-bottom: 2px solid yellow;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 1.5px solid yellow;
    @media screen and (max-width: 1350px) {
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
        <Link href="/home">
          <a>T - shirts factory</a>
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
