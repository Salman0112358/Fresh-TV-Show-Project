import React from "react";

import MainLogo from "../images/main-logo.png";
import APILogo from "../images/API-logo.png";

import { Wrapper, Content, LogoImg, APIImg, APIsource } from "./Header.styles";

const Header = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Content>
          <LogoImg src={MainLogo} alt="main-logo" />
          <div>
            <APIImg src={APILogo} alt="api-logo" />
            <APIsource>
              Source:{" "}
              <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
                <b>tvmaze</b>
              </a>
            </APIsource>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
