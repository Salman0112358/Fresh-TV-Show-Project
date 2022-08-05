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

const ShowThumbnail = ({
  name,
  summary,
  rating,
  image,
  url,
  genres,
}: ShowProps): JSX.Element => {
  return (
    <Wrapper>
      <ShowDetails>{name}</ShowDetails>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={image} alt="show-img"></Image>
      </a>
      <ShowDescription>{removeHtmlTag(summary)}</ShowDescription>
    </Wrapper>
  );
};

export default ShowThumbnail;
