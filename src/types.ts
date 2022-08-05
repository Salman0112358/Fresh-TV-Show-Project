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

export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}

export interface ThumbnailProps {
  name: string;
  season: number;
  number: number;
  image?: string;
  summary: string;
  url: string;
}

export interface ShowProps {
  name: string;
  rating: {
    average: number;
  };
  genres: string[];
  image?: string;
  summary: string;
  url: string;
}

export type EpisodeSearchProps = {
  episodeSearchTerm: string;
  episodesArray: IEpisode[];
};

export type ShowSearchTermProps = {
  showSearchTerm: string;
  setShowSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchTermProps = {
  episodeSearchTerm: string;
  setEpisodeSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export interface GridProps {
  header: string;
  children: ReactNode;
}

export type showNameProp = {
  name: string;
  id: number;
};
