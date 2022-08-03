import SearchFilterFunction from "./searchMatchingFunction";
import episodes from "../episodes.json";

const exampleArrayA = [
  {
    id: 4954,
    url: "https://www.tvmaze.com/episodes/4954/game-of-thrones-1x03-lord-snow",
    name: "Lord Snow",
    season: 1,
    number: 3,
    type: "regular",
    airdate: "2011-05-01",
    airtime: "21:00",
    airstamp: "2011-05-02T01:00:00+00:00",
    runtime: 60,
    rating: { average: 8.3 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/1/2671.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/2671.jpg",
    },
    summary:
      "<p>Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing.</p>",
    _links: { self: { href: "https://api.tvmaze.com/episodes/4954" } },
  },
  {
    id: 4990,
    url: "https://www.tvmaze.com/episodes/4990/game-of-thrones-4x09-the-watchers-on-the-wall",
    name: "The Watchers on the Wall",
    season: 4,
    number: 9,
    type: "regular",
    airdate: "2014-06-08",
    airtime: "21:00",
    airstamp: "2014-06-09T01:00:00+00:00",
    runtime: 60,
    rating: { average: 9 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/1/2593.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/2593.jpg",
    },
    summary:
      "<p>Jon Snow and the rest of the Night's Watch face the biggest challenge to the Wall yet.</p>",
    _links: { self: { href: "https://api.tvmaze.com/episodes/4990" } },
  },
];

const exampleArrayB = [
  {
    id: 4990,
    url: "https://www.tvmaze.com/episodes/4990/game-of-thrones-4x09-the-watchers-on-the-wall",
    name: "The Watchers on the Wall",
    season: 4,
    number: 9,
    type: "regular",
    airdate: "2014-06-08",
    airtime: "21:00",
    airstamp: "2014-06-09T01:00:00+00:00",
    runtime: 60,
    rating: { average: 9 },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/1/2593.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/2593.jpg",
    },
    summary:
      "<p>Jon Snow and the rest of the Night's Watch face the biggest challenge to the Wall yet.</p>",
    _links: { self: { href: "https://api.tvmaze.com/episodes/4990" } },
  },
];

test("takes an input array of Episode information and returns a filtered array that has only includes episodes matching a specified search term", () => {
  expect(SearchFilterFunction(episodes, "jon snow a")).toBe(exampleArrayA);
  expect(SearchFilterFunction(episodes, "jon snow an")).toBe(exampleArrayB);
  expect(SearchFilterFunction(episodes, "")).toBe([]);
});
