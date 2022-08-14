import { IShow } from "../types";

import { showNameProp } from "../types";

export default function sortArrayAlphabetically(
  inputArray: showNameProp[] | IShow[]
): showNameProp[] | IShow[] {
  return inputArray.sort((a, b) =>
    a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
      ? 1
      : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()
      ? -1
      : 0
  );
}
