import React, { ReactNode } from "react";
import { Wrapper, MenuDrop } from "./ReturnToShowPageButton.styles";

type ClearButtonProps = {
  children: ReactNode;
};

function ReturnToShowPageButton({ children }: ClearButtonProps): JSX.Element {
  return (
    <Wrapper>
      <MenuDrop>
        <div className="dropdown">{children}</div>
      </MenuDrop>
    </Wrapper>
  );
}
export default ReturnToShowPageButton;
