import padNumberToTwoDigits from "./padNumberToTwoDigits";

test("returns a padded two digit number", () => {
  expect(padNumberToTwoDigits(1)).toBe("01");
  expect(padNumberToTwoDigits(20)).toBe("20");
  expect(padNumberToTwoDigits(60)).toBe("60");
  expect(padNumberToTwoDigits(-1)).toBe("error");
  expect(padNumberToTwoDigits(-20)).toBe("error");
  expect(padNumberToTwoDigits(-60)).toBe("error");
});
