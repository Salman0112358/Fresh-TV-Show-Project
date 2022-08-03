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
}: ThumbnailProps): JSX.Element => {
  return (
    <>
      <Wrapper>
        <EpisodeDetails>
          S{padNumberToTwoDigits(season)}E{padNumberToTwoDigits(number)} -{" "}
          {name}
        </EpisodeDetails>
          <Image src={image} alt="episode-img" ></Image>  
        <EpisodeDescription>{removeHtmlTag(summary)}</EpisodeDescription>
      </Wrapper>
    </>
  );
};
export default Thumbnail;
