import React from "react";

// import components
import Header from "../Header/Header";
import Grid from "../Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";

//import episodes
import episodes from "../episodes.json";

//import inteface
import { IEpisode } from "../types";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Grid header={`Showing ${episodes.length} Episodes`}>
        {episodes.map((item: IEpisode) => (
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
