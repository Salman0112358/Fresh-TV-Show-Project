// React Lib import
import React, { useState, useEffect } from "react";
// import components
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";
import ShowThumbnail from "../ShowThumbnail/ShowThumbnail";
import SearchBar from "../SearchBar/SearchBar";
import { DropDownEpisodeMenu } from "../DropDownEpisodeMenu/DropDownEpisodeMenu";
import { DropDownShowMenu } from "../DropDownShowMenu/DropDownShowMenu";
import ClearSearchButton from "../ClearSearchButton/ClearSearchButton";

//import inteface
import { IEpisode } from "../../types";
import { IShow } from "../../types";
import { showNameProp } from "../../types";
//import utility function
import SearchFilterFunction from "../../utils/searchMatchingFunction";
import showSearchFilterFunction from "../../utils/searchShowMatchingFunction";
import { emptyImageChecker } from "../../utils/emptyImageChecker";
import padNumberToTwoDigits from "../../utils/padNumberToTwoDigits";
import sortArrayAlphabetically from "../../utils/sortArrayAlphabetically";
import ReturnToShowPageButton from "../ReturnToShowPageButton/ReturnToShowPageButton";
import ShowSearchBar from "../ShowsSearchBar/ShowsSearchBar";
//////////////////////////

const Home = (): JSX.Element => {
  // react managed states
  const [currentShow, setCurrentShow] = useState<IEpisode[]>([]);
  const [episodeSearchTerm, setEpisodeSearchTerm] = useState("");
  const [showSearchTerm, SetShowSearchTerm] = useState("");
  const [currentShowListing, setCurrentShowListing] = useState<IShow[]>([]);
  const [enableShowPage, setEnableShowPage] = useState<boolean>(true);

  const totalEpisodeCounter: number = currentShow.length;
  const totalShowCounter: number = currentShowListing.length;

  const searchFilteredEpisodes = SearchFilterFunction(
    currentShow,
    episodeSearchTerm
  );

  const searchFilteredShows = showSearchFilterFunction(
    currentShowListing,
    showSearchTerm
  );

  useEffect(() => {
    const getshowListing = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      //http://api.tvmaze.com/shows?page=1

      const jsonBody: IShow[] = await response.json();
      setCurrentShowListing(jsonBody);
      //console.log("fetching completed");
    };
    getshowListing();
  }, []);
  /////////////////////////////////////////////////////////////
  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

      const jsonBody: IEpisode[] = await response.json();
      setCurrentShow(jsonBody);
    };
    getEpisodes();
  }, [currentShowListing]);
  ///////////////////////////////////////////////

  //console.log(showEpisodesForSelectedShow(84))

  return (
    <>
      <Header />
      {!enableShowPage ? (
        <SearchBar
          episodeSearchTerm={episodeSearchTerm}
          setEpisodeSearchTerm={setEpisodeSearchTerm}
        />
      ) : (
        <ShowSearchBar
          showSearchTerm={showSearchTerm}
          setShowSearchTerm={SetShowSearchTerm}
        />
      )}

      <div className="parent-buttons">
        {!enableShowPage ? (
          <DropDownEpisodeMenu>
            {searchFilteredEpisodes.map((item: IEpisode) => (
              <a key={item.id} href="#top">
                <li onClick={() => setEpisodeSearchTerm(item.name)}>
                  S{padNumberToTwoDigits(item.season)}E
                  {padNumberToTwoDigits(item.number)} - {item.name}
                </li>
              </a>
            ))}
          </DropDownEpisodeMenu>
        ) : (
          <></>
        )}
        <DropDownShowMenu>
          {sortArrayAlphabetically(currentShowListing).map(
            (item: IShow | showNameProp) => (
              <a key={item.id} href="#top">
                <li
                  onClick={async () => {
                    const response = await fetch(
                      `https://api.tvmaze.com/shows/${item.id}/episodes`
                    );
                    const jsonBody: IEpisode[] = await response.json();
                    setEnableShowPage(false);
                    setCurrentShow(jsonBody);
                  }}
                >
                  {item.name}
                </li>
              </a>
            )
          )}
        </DropDownShowMenu>
        <ClearSearchButton>
          {!enableShowPage ? (
            <button
              className="dropbtn"
              onClick={() => setEpisodeSearchTerm("")}
            >
              Clear Episode Search
            </button>
          ) : (
            <></>
          )}
        </ClearSearchButton>
        <ReturnToShowPageButton>
          {!enableShowPage ? (
            <button className="dropbtn" onClick={() => setEnableShowPage(true)}>
              Return Back To Shows Page
            </button>
          ) : (
            <></>
          )}
        </ReturnToShowPageButton>
      </div>
      {!enableShowPage}
      <Grid
        header={
          !enableShowPage
            ? `Showing ${searchFilteredEpisodes.length}/${totalEpisodeCounter} Episodes`
            : `Showing ${searchFilteredShows.length}/${totalShowCounter} Shows`
        }
      >
        {!enableShowPage
          ? searchFilteredEpisodes.map((item: IEpisode) => (
              <Thumbnail
                name={item.name}
                season={item.season}
                number={item.number}
                image={emptyImageChecker(item)}
                summary={item.summary}
                url={item.url}
                key={item.id}
              />
            ))
          : searchFilteredShows.map((item: IShow) => (
              <ShowThumbnail
                name={item.name}
                image={emptyImageChecker(item)}
                summary={item.summary}
                rating={item.rating}
                genres={item.genres}
                url={item.url}
                key={item.id}
              />
            ))}
      </Grid>
    </>
  );
};

export default Home;

// const [currentShow, setCurrentShow] = useState<IEpisode[]>([]);
// const [episodeSearchTerm, setEpisodeSearchTerm] = useState("");
// const [currentShowListing, setCurrentShowListing] = useState<IShow[]>([]);
// const [hasShowBeenSelected, setHasShowBeenSelected] = useState<boolean>(false)
