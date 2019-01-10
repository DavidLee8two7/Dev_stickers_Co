import React, { Component } from "react";
import Head from "next/head";
import {
  HomeStyles,
  IntroductionDiv,
  CompanyInfo,
  ClothingShop,
  PrintingShop
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
            <h2>T - shirts factory</h2>
            <p>
              Proudly Serving Since 1997&nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp;2337 S Bristol St Santa Ana, CA 92704
            </p>
          </CompanyInfo>
        </IntroductionDiv>
        <ClothingShop>
          <div style={{ gridColumn: "1 / -1" }}>
            <h4>
              Our mission is to provide the Best Price, Good Quality & Trend
              Resistance!
            </h4>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <h5>
              For All of your family members or for yourself Men, Women, Kids{" "}
            </h5>
          </div>
          <div>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <button>Check out our collection</button>
          </div>
        </ClothingShop>
        <PrintingShop>
          <div style={{ gridColumn: "1 / -1" }}>
            <h5>
              For All of your family members or for yourself Men, Women, Kids{" "}
            </h5>
          </div>
          <div>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            <button>Choose your Design</button>
          </div>
        </PrintingShop>
      </HomeStyles>
    );
  }
}

export default Home;
