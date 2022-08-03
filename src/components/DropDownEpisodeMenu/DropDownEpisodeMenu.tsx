import React from "react";

import { MenuDrop } from "./DropDownEpisodeMenu.styles";

type DropDownMenuProps = {
  children: JSX.Element;
  name: string;
  season: number;
  number: number;
};

export const DropDownEpisodeMenu = ({
  children,
  name,
  season,
  number,
}: DropDownMenuProps): JSX.Element => {
  return (
    <MenuDrop>
      <div className="dropdown">
        <button className="dropbtn">Show Episodes List</button>
        <div className="dropdown-content">
          <ul>{children}</ul>
        </div>
      </div>
    </MenuDrop>
  );
};
