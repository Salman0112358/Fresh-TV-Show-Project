import { ReactNode } from "react";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface ThumbnailProps {
  name: string;
  season: number;
  number: number;
  image?: string;
  summary: string;
  url : string
}

export type EpisodeSearchProps = {
  episodeSearchTerm: string;
  episodesArray: IEpisode[];
};

export type SearchTermProps = {
  episodeSearchTerm: string;
  setEpisodeSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export interface GridProps {
  header: string;
  children: ReactNode;
}
