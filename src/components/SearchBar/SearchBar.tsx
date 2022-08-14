import React from "react";

import { SearchTermProps } from "../../types";

import { Wrapper, Content } from "./SearchBar.styles";

import SearchImage from "../../images/search.png";

function SearchBar({
  episodeSearchTerm,
  SetEpisodeSearchTerm,
}: SearchTermProps): JSX.Element {
  return (
    <>
      <Wrapper>
        <Content>
          <img src={SearchImage} alt="search-img" />
          <input
            type="text"
            placeholder="Search Episodes"
            onChange={(event) =>
              SetEpisodeSearchTerm(event.currentTarget.value)
            }
            value={episodeSearchTerm}
          ></input>
        </Content>
      </Wrapper>
    </>
  );
}

export default SearchBar;
