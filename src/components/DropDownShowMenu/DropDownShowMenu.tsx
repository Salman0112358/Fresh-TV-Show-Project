import React, { ReactNode } from "react";
import { Wrapper, MenuDrop } from "./DropDownShowMenu.styles";

type DropDownMenuProps = {
  children: ReactNode;
};

export const DropDownShowMenu = ({
  children,
}: DropDownMenuProps): JSX.Element => {
  return (
    <Wrapper>
      <MenuDrop>
        <div className="dropdown">
          <button className="dropbtn">Display All Show Listings</button>
          <div className="dropdown-content">
            <ul>{children}</ul>
          </div>
        </div>
      </MenuDrop>
    </Wrapper>
  );
};
