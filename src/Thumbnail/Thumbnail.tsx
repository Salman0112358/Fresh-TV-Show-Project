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
          S{padNumberToTwoDigits(season)}E{padNumberToTwoDigits(number)} -{" "}
          {name}
        </EpisodeDetails>
        <Image src={image} alt="episode-img"></Image>
        <EpisodeDescription>{summary}</EpisodeDescription>
      </Wrapper>
    </>
  );
};
export default Thumbnail;
function padNumberToTwoDigits(inputNumber: number): string {
  if (inputNumber < 10) {
    return `0${inputNumber}`;
  } else if (inputNumber >= 10) {
    return `${inputNumber}`;
  } else {
    return "null";
  }
}

/*
If number < 10 then
  seasonNumber = 0 + number
 else if number >= 10 then
  seasonNumber = number  
*/
