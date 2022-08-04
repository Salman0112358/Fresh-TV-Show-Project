export const getAllShows = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const jsonBody = await response.json();
  const EpisodeList = jsonBody;
  console.log(EpisodeList);
  return EpisodeList;
};

const API_URL = " https://api.tvmaze.com/";
const SEARCH_SHOW_URL = `${API_URL}search/shows?q=`;
const SHOW_EPISODES_URL = "&embed=episodes";



const getShowsList = async (query) => {
  const response = await fetch(`${SEARCH_SHOW_URL}${query}`);
  const jsonBody = await response.json();
  const showList = jsonBody
  console.log(showList)
  return showList
};

export {getShowsList}