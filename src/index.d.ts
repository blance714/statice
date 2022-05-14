type bgFunctionType = "fetch";

type SearchResult = {
  engine: EngineType,
  word: {
    spell: string,
    excerpt: string,
    accent?: number,
    pron: string,
    type?: string
  },
  details: [{
    meaning: string,
    examples: [{
      sentence: string,
      translate: string
    }]
  }]
};

type EngineType = "moji";
type Engine = {
  searchPassage: (passage: string) => Promise<SearchResult>,
  getCandidate?: (passage: string) => Promise<string>,
};

declare const moji: engine;