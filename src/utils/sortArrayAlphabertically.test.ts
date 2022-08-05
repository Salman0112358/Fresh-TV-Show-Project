import sortArrayAlphabetically from "./sortArrayAlphabetically";

import { showNameProp } from "../types";

const testArrayA: showNameProp[] = [
  { name: "Cinmyname", id: 1 },
  { name: "Salman", id: 2 },
  { name: "Emmanuel", id: 3 },
  { name: "Neill", id: 4 },
  { name: "Ainmyname", id: 5 },
  { name: "Binmyname", id: 6 },
];
const expectedArrayA: showNameProp[] = [
  { name: "Ainmyname", id: 5 },
  { name: "Binmyname", id: 6 },
  { name: "Cinmyname", id: 1 },
  { name: "Emmanuel", id: 3 },
  { name: "Neill", id: 4 },
  { name: "Salman", id: 2 },
];

test("this function takes an input array and sorts by the obj.name property  and returns an array that is organised by alphabetical order", () => {
  expect(sortArrayAlphabetically(testArrayA)).toStrictEqual(expectedArrayA);
});
