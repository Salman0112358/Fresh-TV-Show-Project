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
//import intefaces & types
import { IEpisode, IShow, showNameProp } from "../../types";
//import utility functions
import SearchFilterFunction from "../../utils/searchMatchingFunction";
import showSearchFilterFunction from "../../utils/searchShowMatchingFunction";
import { emptyImageChecker } from "../../utils/emptyImageChecker";
import padNumberToTwoDigits from "../../utils/padNumberToTwoDigits";
import sortArrayAlphabetically from "../../utils/sortArrayAlphabetically";
import ReturnToShowPageButton from "../ReturnToShowPageButton/ReturnToShowPageButton";
import ShowSearchBar from "../ShowsSearchBar/ShowsSearchBar";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home = (): JSX.Element => {
  // react managed states
  const [currentShow, setCurrentShow] = useState<IEpisode[]>([]);
  const [episodeSearchTerm, SetEpisodeSearchTerm] = useState("");
  const [showSearchTerm, SetShowSearchTerm] = useState("");
  const [currentShowListing, SetCurrentShowListing] = useState<IShow[]>([]);
  const [enableShowPage, SetEnableShowPage] = useState<boolean>(true);
  const [nameCurrentShow, SetNameCurrentShow] = useState<string>("");

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
      const UrlArray = [];
      const combinedShowsArray: IShow[] = [];

      for (let i = 0; i <= 1; i++) {
        UrlArray.push(`http://api.tvmaze.com/shows?page=${i}`);
      }
      for (const page of UrlArray) {
        const response = await fetch(page);
        const jsonBody: IShow = await response.json();
        combinedShowsArray.push(jsonBody);
      }
      console.log(combinedShowsArray.flat(Infinity));
      SetCurrentShowListing(combinedShowsArray.flat(Infinity));
    };
    getshowListing();
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

      const jsonBody: IEpisode[] = await response.json();
      setCurrentShow(jsonBody);
    };
    getEpisodes();
  }, [currentShowListing]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      {!enableShowPage ? (
        <SearchBar
          episodeSearchTerm={episodeSearchTerm}
          SetEpisodeSearchTerm={SetEpisodeSearchTerm}
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
                <li onClick={() => SetEpisodeSearchTerm(item.name)}>
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
                    SetShowSearchTerm("");
                    SetEpisodeSearchTerm("");
                    SetEnableShowPage(false);
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
              onClick={() => SetEpisodeSearchTerm("")}
            >
              Clear Episode Search
            </button>
          ) : (
            <></>
          )}
        </ClearSearchButton>
        <ReturnToShowPageButton>
          {!enableShowPage ? (
            <button
              className="dropbtn"
              onClick={() => {
                SetEnableShowPage(true);
                SetShowSearchTerm("");
              }}
            >
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
            ? `Showing ${searchFilteredEpisodes.length}/${totalEpisodeCounter} Episodes for ${nameCurrentShow}`
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
                disableShowPage={SetEnableShowPage}
                setCurrentShow={setCurrentShow}
                SetNameCurrentShow={SetNameCurrentShow}
                SetEpisodeSearchTerm={SetEpisodeSearchTerm}
                id={item.id}
                url={item.url}
                key={item.id}
              />
            ))}
      </Grid>
    </>
  );
};

export default Home;
