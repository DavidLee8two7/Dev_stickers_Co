import React, { Component } from "react";
import Link from "next/link";
import { FooterDiv, Address, CopyRight } from "./styles/FooterStyles";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
        <Address>2337 S Bristol St. Santa Ana, CA 92704</Address>
        <CopyRight>
          Copyright &copy; by{" "}
          <Link prefetch href="/contact">
            <a>T - Shirts Factory</a>
          </Link>{" "}
          | Since 1997
        </CopyRight>
      </FooterDiv>
    );
  }
}

export default FooterSection;
