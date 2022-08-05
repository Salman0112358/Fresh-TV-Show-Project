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
  SetNameCurrentShow,
  SetEpisodeSearchTerm,
}: ShowProps): JSX.Element => {
  return (
    <Wrapper>
      <ShowDetails>{name}</ShowDetails>
      <ShowDetails>
        <i>Genres: {genres.join(",")}</i>
      </ShowDetails>
      <a href="#top">
        <Image
          src={image}
          alt="show-img"
          onClick={async () => {
            SetEpisodeSearchTerm("");
            const response = await fetch(
              `https://api.tvmaze.com/shows/${id}/episodes`
            );
            const jsonBody: IEpisode[] = await response.json();
            setCurrentShow(jsonBody);
            disableShowPage(false);
            SetNameCurrentShow(name);
          }}
        ></Image>
      </a>
      <ShowDescription>{removeHtmlTag(summary).substring(0,300)}...<a className="links" href={url} target ='_blank' rel='noreferrer'>(Read More)!</a></ShowDescription>
    </Wrapper>
  );
};

export default ShowThumbnail;
