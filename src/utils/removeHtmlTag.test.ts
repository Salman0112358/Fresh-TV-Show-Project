import removeHtmlTag from "./removeHtmlTag";

test("this function will remove the opening <p> and closing </p> paragraph HTML tags for a given string", () => {
  expect(
    removeHtmlTag("<p>this is a test string lets see how it goes</p>")
  ).toBe("this is a test string lets see how it goes");
  expect(removeHtmlTag("<p>this is a test string lets see how it goes")).toBe(
    "this is a test string lets see how it goes"
  );
  expect(removeHtmlTag("this is a test string lets see how it goes</p>")).toBe(
    "this is a test string lets see how it goes"
  );
  expect(
    removeHtmlTag("<b>this is a test string lets see how it goes</b>")
  ).toBe("this is a test string lets see how it goes");
  expect(removeHtmlTag("")).toBe("");
});
