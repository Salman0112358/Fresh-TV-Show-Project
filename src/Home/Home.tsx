import React, { useState, useEffect } from "react";
// importing API

// import components
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";
//import episodes
//import episodes from "../episodes.json";
//import inteface
import { IEpisode } from "../types";

const Home = (): JSX.Element => {
  const [currentShow, setCurrentShow] = useState<IEpisode[]>([]);

  useEffect(() => {
    const getEpisodes = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");

      const jsonBody: IEpisode[] = await response.json();
      setCurrentShow(jsonBody);
    };
    getEpisodes();
  }, []);

  return (
    <>
      <Header />
      <Grid header={`Showing ${currentShow.length} Episodes`}>
        {currentShow.map((item: IEpisode) => (
          <Thumbnail
            name={item.name}
            season={item.season}
            number={item.number}
            image={item.image.medium}
            summary={item.summary}
            key={item.id}
          />
        ))}
      </Grid>
    </>
  );
};
export default Home;
