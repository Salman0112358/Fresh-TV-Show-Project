import { IEpisode } from "../types";

export default function SearchFilterFunction(
  currentShow: IEpisode[],
  episodeSearchTerm: string
): IEpisode[] {
  const searchFilteredEpisodes = currentShow.filter((item) => {
    return (
      item.name.toLowerCase().includes(episodeSearchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(episodeSearchTerm.toLowerCase())
    );
  });

  return searchFilteredEpisodes;
}
