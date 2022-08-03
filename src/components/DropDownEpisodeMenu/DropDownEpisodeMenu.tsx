import React from "react";

import { MenuDrop } from "./DropDownEpisodeMenu.styles";

type DropDownMenuProps = {
  children: any;
};

export const DropDownEpisodeMenu = ({
  children,
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
