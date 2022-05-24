export type ResponseData = {
  libraries: Library[],
  total: number,
}

export interface Library {
  githubUrl: string;
  github: Github;
  topicSearchString: string;
}

export interface Urls {
  repo: string;
  clone: string;
  homepage?: any;
}

export interface Stats {
  hasIssues: boolean;
  hasWiki: boolean;
  hasPages: boolean;
  hasDownloads: boolean;
  updatedAt: string;
  createdAt: string;
  pushedAt: string;
  forks: number;
  issues: number;
  subscribers: number;
  stars: number;
}

export interface License {
  key: string;
  name: string;
  spdxId: string;
  url: string;
  id: string;
}

export interface Github {
  urls: Urls;
  stats: Stats;
  name: string;
  fullName: string;
  description: string;
  license?: License;
}

export type Query = {
  page?: string | number,
  pageSize?: string | number,
  order?: string,
  search?: string,
  [key: string]: any,
};