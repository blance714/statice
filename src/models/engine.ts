import { SearchResult } from "./search";

export type EngineType = "moji";
export type Engine = {
  searchPassage: (passage: string) => Promise<SearchResult>,
  getCandidate?: (passage: string) => Promise<string>,
};