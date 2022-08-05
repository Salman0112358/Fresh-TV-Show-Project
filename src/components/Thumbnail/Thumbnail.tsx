import {
  Image,
  Wrapper,
  EpisodeDetails,
  EpisodeDescription,
} from "./Thumbnail.styles";

import React from "react";
// import interface
import { ThumbnailProps } from "../../types";

// function utility imports
import padNumberToTwoDigits from "../../utils/padNumberToTwoDigits";
import removeHtmlTag from "../../utils/removeHtmlTag";

const Thumbnail = ({
  name,
  season,
  number,
  image,
  summary,
  url,
}: ThumbnailProps): JSX.Element => {
  return (
    <>
      <Wrapper>
        <EpisodeDetails>
          S{padNumberToTwoDigits(season)}E{padNumberToTwoDigits(number)} -{" "}
          {name}
        </EpisodeDetails>
        <a href={url} target="_blank" rel="noreferrer">
          <Image src={image} alt="episode-img"></Image>
        </a>
        <EpisodeDescription>{removeHtmlTag(summary).substring(0,300)}...<a className="links" href={url} target ='_blank' rel='noreferrer'>(Read More)!</a></EpisodeDescription>
      </Wrapper>
    </>
  );
};
export default Thumbnail;
