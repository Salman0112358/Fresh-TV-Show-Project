import { IEpisode } from "../types";

export default function SearchFilterFunction(
  currentShow: IEpisode[],
  episodeSearchTerm: string
): IEpisode[] {
  const searchFilteredEpisodes = currentShow.filter((item) => {
    if (item.name && item.summary) {
      return (
        item.name.toLowerCase().includes(episodeSearchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(episodeSearchTerm.toLowerCase())
      );
    } else if (item.name) {
      return item.name.toLowerCase().includes(episodeSearchTerm.toLowerCase());
    }
    return "";
  });

  return searchFilteredEpisodes;
}
