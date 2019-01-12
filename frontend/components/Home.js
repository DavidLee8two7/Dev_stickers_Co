import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  HomeStyles,
  IntroductionDiv,
  CompanyInfo,
  ClothingShop,
  PrintingShop
} from "./styles/HomeStyles";
import Title from "./styles/Title";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <Head>
          <title>T - Shirts Factory | Santa Ana CA</title>
        </Head>
        <IntroductionDiv>
          <CompanyInfo>
            <h2>General Clothing Shop</h2>
            <p>
              Proudly Serving Since 1997&nbsp;&nbsp;&nbsp;&nbsp; |
              &nbsp;&nbsp;&nbsp;&nbsp;2337 S Bristol St. Santa Ana, CA 92704
            </p>
          </CompanyInfo>
        </IntroductionDiv>
        <ClothingShop>
          <div className="mission">
            <h4>
              Our mission is to provide a good quality clothes at the best price
              that are classic, comportable & trend resistance meaning it's been
              always loved by general population.
            </h4>
          </div>
          <ul>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Kids' Clothing</li>
            <li>Babies' Clothing</li>
          </ul>
          <ul>
            <li>School Clothing</li>
            <li>Uniforms</li>
            <li>Comfort Clothing</li>
            <li>Sports Clothing</li>
          </ul>
          <ul>
            <li>Shoes & Accessories</li>
            <li>Backpacks & Carriers</li>
            <li>Socks & Underwares</li>
            <li>Pajamas & Etc</li>
          </ul>
        </ClothingShop>
        <PrintingShop>
          <div className="custom_printing">
            <Title>
              <Link
                href={{
                  pathname: "/items"
                }}
              >
                <a>Custom T - Shirts printing</a>
              </Link>
            </Title>
          </div>
          <ul>
            <li>Whole sale orders for Businesses</li>
            <li>Custom printing for Individuals</li>
            <li>Pre-selected Unique Designs</li>
          </ul>
        </PrintingShop>
      </HomeStyles>
    );
  }
}

export default Home;
