export const getAllShows = async () => {
    const response = await fetch("https://api.tvmaze.com/shows");
    const jsonBody = await response.json();
    const showsList = jsonBody
    console.log(showsList)
    return showsList 
  };

 const API_URL = " https://api.tvmaze.com/";
 const SEARCH_SHOW_URL = `${API_URL}search/shows?q=`
 const SHOW_EPISODES_URL = "&embed=episodes"