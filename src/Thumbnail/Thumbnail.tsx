import {
  Image,
  Wrapper,
  EpisodeDetails,
  EpisodeDescription,
} from "./Thumbnail.styles";

import React from "react";
// import interface
import { ThumbnailProps } from "../types";

const Thumbnail = ({
  name,
  season,
  number,
  image,
  summary,
}: ThumbnailProps): JSX.Element => {
  return (
    <>
      <Wrapper>
        <EpisodeDetails>
          {name} {season} {number}
        </EpisodeDetails>
        <Image src={image} alt="episode-img"></Image>
        <EpisodeDescription>{summary}</EpisodeDescription>
      </Wrapper>
    </>
  );
};
export default Thumbnail;
