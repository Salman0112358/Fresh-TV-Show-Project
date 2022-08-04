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
      </MenuDrop>
    </Wrapper>
  );
};
