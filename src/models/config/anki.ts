// SearchResult -> AnkiNoteFillRule -> AnkiNote
export type AnkiNoteFillRule = {
  spell?: string,
  meaning?: string,
  accent?: string,
  pron?: string,
  pronAccent?: string,
  type?: string
  sentence?: string,
  translate?: string
};

export type SearchResultNote = {
  spell: string,
  meaning: string,
  accent?: string,
  pron?: string,
  pronAccent?: string,
  type?: string
  sentence?: string,
  translate?: string
};