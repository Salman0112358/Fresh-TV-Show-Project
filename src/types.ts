export interface GridProps {
  header: string;
  children: any;
}

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
  image: string;
  summary: string;
}
