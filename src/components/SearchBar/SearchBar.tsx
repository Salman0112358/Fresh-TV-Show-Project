import React from "react";

import { SearchTermProps } from "../../types";

function SearchBar({
  episodeSearchTerm,
  setEpisodeSearchTerm,
}: SearchTermProps): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="Search Episodes"
        onChange={(event) => setEpisodeSearchTerm(event.currentTarget.value)}
        value={episodeSearchTerm}
      ></input>
    </>
  );
}

export default SearchBar;
