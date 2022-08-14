import { IShow } from "../types";

export default function SearchFilterFunction(
  currentShowListing: IShow[],
  showSearchTerm: string
): IShow[] {
  const searchFilteredShows = currentShowListing.filter((item) => {
    if (item.name && item.summary && item.genres) {
      return (
        item.name.toLowerCase().includes(showSearchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(showSearchTerm.toLowerCase()) ||
        item.genres.find((term) => term.includes(showSearchTerm))
      );
    } else if (item.name) {
      return item.name.toLowerCase().includes(showSearchTerm.toLowerCase());
    }
    return "";
  });

  return searchFilteredShows;
}
