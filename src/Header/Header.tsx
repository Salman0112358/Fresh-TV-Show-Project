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
            <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
              <APIImg src={APILogo} alt="api-logo" />
            </a>
            <APIsource>
              Source:{" "}
              <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
                <b>TVMAZE</b>
              </a>
            </APIsource>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
