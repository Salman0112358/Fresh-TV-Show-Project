import { IShow } from "../types";

export default function SearchFilterFunction(
  currentShowListing: IShow[],
  showSearchTerm: string
): IShow[] {
  const searchFilteredShows = currentShowListing.filter((item) => {
    if (item.name && item.summary) {
      return (
        item.name.toLowerCase().includes(showSearchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(showSearchTerm.toLowerCase())
      );
    } else if (item.name) {
      return item.name.toLowerCase().includes(showSearchTerm.toLowerCase());
    }
    return "";
  });

  return searchFilteredShows;
}
