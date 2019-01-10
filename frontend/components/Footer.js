import React, { Component } from "react";
import Link from "next/link";
import Signout from "./Signout";
import { FooterDiv, FooterNav, CopyRight } from "./styles/FooterStyles";

class FooterSection extends Component {
  render() {
    return (
      <FooterDiv>
        <FooterNav>
          <ul>
            <li>
              <Link prefetch href="/index">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/items">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/orders">
                <a>Orders</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </FooterNav>
        <CopyRight>
          <p>
            Copyright &copy; by{" "}
            <Link prefetch href="/contact">
              <a>T - Shirts Factory</a>
            </Link>
          </p>
        </CopyRight>
      </FooterDiv>
    );
  }
}

export default FooterSection;
