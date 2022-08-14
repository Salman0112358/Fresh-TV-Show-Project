import React from "react";

import { ShowSearchTermProps } from "../../types";

import { Wrapper, Content } from "./ShowsSearchBar.styles";

import SearchImage from "../../images/search.png";

function ShowSearchBar({
  showSearchTerm,
  setShowSearchTerm,
}: ShowSearchTermProps): JSX.Element {
  return (
    <>
      <Wrapper>
        <Content>
          <img src={SearchImage} alt="search-img" />
          <input
            type="text"
            placeholder="Search Shows"
            onChange={(event) => setShowSearchTerm(event.currentTarget.value)}
            value={showSearchTerm}
          ></input>
        </Content>
      </Wrapper>
    </>
  );
}

export default ShowSearchBar;
