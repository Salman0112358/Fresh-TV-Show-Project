import React, { ReactNode } from "react";

import { Wrapper, MenuDrop } from "./DropDownEpisodeMenu.styles";

type DropDownMenuProps = {
  children: ReactNode;
};

export const DropDownEpisodeMenu = ({
  children,
}: DropDownMenuProps): JSX.Element => {
  return (
    <Wrapper>
      <MenuDrop>
        <div className="dropdown">
          <button className="dropbtn">ShowEpisodesList</button>
          <div className="dropdown-content">
            <ul>{children}</ul>
          </div>
        </div>
      </MenuDrop>
    </Wrapper>
  );
};

/*
import { IEpisode } from "../types";
import padNumberToTwoDigits from "../utils/padNumberToTwoDigits"
type EpisodeMenuProps = {
    name : string
    season : number
    number : number
}
const DropDownEpisodeMenu = ({name, season, number} : EpisodeMenuProps) : JSX.Element => {
    return(
        <>
        <li>S{padNumberToTwoDigits(season)}E{padNumberToTwoDigits(number)} - {name}</li>
        </>
    )
}
*/
