import {
  Image,
  Wrapper,
  ShowDetails,
  ShowDescription,
} from "./ShowThumbnail.styles";

import React from "react";
// import interface
import { ShowProps } from "../../types";
// function utility imports
import removeHtmlTag from "../../utils/removeHtmlTag";

import { IEpisode } from "../../types";

const ShowThumbnail = ({
  name,
  summary,
  rating,
  image,
  url,
  genres,
  id,
  disableShowPage,
  setCurrentShow,
  setNameCurrentShow,
}: ShowProps): JSX.Element => {
  return (
    <Wrapper>
      <ShowDetails>{name}</ShowDetails>z
      <a href="#top">
        <Image
          src={image}
          alt="show-img"
          onClick={async () => {
            const response = await fetch(
              `https://api.tvmaze.com/shows/${id}/episodes`
            );
            const jsonBody: IEpisode[] = await response.json();
            setCurrentShow(jsonBody);
            disableShowPage(false);
            setNameCurrentShow(name);
          }}
        ></Image>
      </a>
      <ShowDescription>{removeHtmlTag(summary)}</ShowDescription>
    </Wrapper>
  );
};

export default ShowThumbnail;
