import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const theme = {
  black: "#111111", // 17,17,17
  white: "#ffffff", // 255,255,255
  offWhite: "#f5f8fa", // 245,248,250
  lightGray: "#e1e1e1", // 225,225,225
  red: "#ff0000", // 255,0,0
  yellow: "#f7df1e", // 247,223,30
  brown: "#3e2723", // 62,39,35
  maxWidth: "100%",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  fontDisplay: "'Coiny', cursive",
  fontSecondary: "'Raleway', sans-serif",
  ts: "1px 1px 2px rgba(126, 126, 126, 0.75)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *: before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: ${theme.fontPrimary};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
