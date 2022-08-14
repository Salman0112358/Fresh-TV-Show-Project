import React, { ReactNode } from "react";
import { Wrapper, MenuDrop } from "./ClearSearchButton.styles";

type ClearButtonProps = {
  children: ReactNode;
};

function ClearSearchButton({ children }: ClearButtonProps): JSX.Element {
  return (
    <Wrapper>
      <MenuDrop>
        <div className="dropdown">{children}</div>
      </MenuDrop>
    </Wrapper>
  );
}
export default ClearSearchButton;
