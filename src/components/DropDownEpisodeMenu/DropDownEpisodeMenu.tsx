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
          <button className="dropbtn">Show Episodes List</button>
          <div className="dropdown-content">
            <ul>{children}</ul>
          </div>
        </div>
      </MenuDrop>
    </Wrapper>
  );
};
