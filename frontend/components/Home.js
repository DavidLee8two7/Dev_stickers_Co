import React, { Component } from "react";
import Head from "next/head";
import {
  HomeStyles,
  IntroductionDiv,
  CompanyInfo,
  MenCloth,
  WomenCloth,
  KidsCloth,
  SalesCloth
} from "./styles/HomeStyles";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Head>
          <title>T - Shirts Factory | Santa Ana CA</title>
        </Head>
        <IntroductionDiv>
          <CompanyInfo>
            <div>
              <h2>T - shirts factory</h2>
              <p>
                Proudly Serving Since 1997&nbsp;&nbsp;&nbsp;&nbsp; |
                &nbsp;&nbsp;&nbsp;&nbsp;2337 S Bristol St Santa Ana, CA 92704
              </p>
            </div>
          </CompanyInfo>
        </IntroductionDiv>
        <MenCloth>men</MenCloth>
        <WomenCloth>women</WomenCloth>
        <KidsCloth>kids</KidsCloth>
        <SalesCloth>sales</SalesCloth>
        <KidsCloth>kids</KidsCloth>
        <SalesCloth>sales</SalesCloth>
      </HomeStyles>
    );
  }
}

export default Home;
