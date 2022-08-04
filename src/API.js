const API_URL = " https://api.tvmaze.com/";
const SEARCH_SHOW_URL = `${API_URL}search/shows?q=`;
//const SHOW_EPISODES_URL = "&embed=episodes";

const getShowSearchList = async (query) => {
  const response = await fetch(`${SEARCH_SHOW_URL}${query}`);
  const jsonBody = await response.json();
  const showSearchList = jsonBody;
  console.log("The list of shows is", showSearchList);
  return showSearchList;
};

const getAllShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const jsonBody = await response.json();
  const showList = jsonBody;
  console.log("The complete list of shows is", showList);
};

export { getShowSearchList, getAllShows };
