import { EngineType } from "./engine";

export type SearchResult = {
  engine: EngineType,
  word: {
    spell: string,
    excerpt: string,
    accent?: string,
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

export type SelectionSentence = {
  normal?: string, bold?: string
};