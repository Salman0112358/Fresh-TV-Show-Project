import React from "react";

import MainLogo from "../images/main-logo.png";
import APILogo from "../images/API-logo.png";

import { Wrapper, Content, LogoImg, APIImg } from "./Header.styles";

const Header = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Content>
          <LogoImg src={MainLogo} alt="main-logo" />
          <APIImg src={APILogo} alt="api-logo" />
          <p>
            Source:{" "}
            <a href="https://www.tvmaze.com" target="_blank" rel="noreferrer">
              <b>tvmaze</b>
            </a>
          </p>
        </Content>
      </Wrapper>
    </>
  );
};

export default Header;
