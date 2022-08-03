import React, { useState, useEffect } from "react";
// importing API

// import components
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";
import SearchBar from "../SearchBar/SearchBar";
import { DropDownEpisodeMenu } from "../DropDownEpisodeMenu/DropDownEpisodeMenu";
//import episodes
//import episodes from "../episodes.json";

//import inteface
import { IEpisode } from "../../types";

//importing function
import SearchFilterFunction from "../../utils/searchMatchingFunction";
import { emptyImageChecker } from "../../utils/emptyImageChecker";
//////////////////////////

const Home = (): JSX.Element => {
  // react managed states
  const [currentShow, setCurrentShow] = useState<IEpisode[]>([]);
  const [episodeSearchTerm, setEpisodeSearchTerm] = useState("");

  const totalEpisodeCounter: number = currentShow.length;

  const searchFilteredEpisodes = SearchFilterFunction(
    currentShow,
    episodeSearchTerm
  );

  //console.log(emptyImageChecker(null))

  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/83/episodes");

      const jsonBody: IEpisode[] = await response.json();
      setCurrentShow(jsonBody);
    };
    getEpisodes();
  }, []);

  return (
    <>
      <Header />
      <SearchBar
        episodeSearchTerm={episodeSearchTerm}
        setEpisodeSearchTerm={setEpisodeSearchTerm}
      />
      {/* <DropDownEpisodeMenu>
        {searchFilteredEpisodes.map((item: IEpisode) => (
            <a
            key = {item.id}
            href= {item.url}
            target= "_blank"
            onClick= {() => setEpisodeSearchTerm(item.name)}
            rel = "noreferrer">
            {item.name}
            </a>
          ))
        }
      </DropDownEpisodeMenu> */}
      {/* {searchFilteredEpisodes.map((item : IEpisode) => (
          <DropDownEpisodeMenu
            name = {item.name}
            season = {item.season}
            number = {item.number}
            key = {item.id}
          />
        ) )}
     */}
      <Grid
        header={`Showing ${searchFilteredEpisodes.length}/${totalEpisodeCounter} Episodes`}
      >
        {searchFilteredEpisodes.map((item: IEpisode) => (
          <Thumbnail
            name={item.name}
            season={item.season}
            number={item.number}
            image={emptyImageChecker(item)}
            summary={item.summary}
            key={item.id}
          />
        ))}
      </Grid>
    </>
  );
};
export default Home;
