///

import { useEffect } from "react";

export const handleGetEpisodes = async (setCurrentShow) => {
  const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

  const jsonBody = await response.json();

  return setCurrentShow(jsonBody);
};
