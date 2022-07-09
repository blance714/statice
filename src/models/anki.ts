export type AnkiResponse = { result: any | null }

export type AnkiNoteMedia = {
  url: string,
  filename: string,
  skipHash?: string,
  fields: [string]
}

export type AnkiNote = {
  deckName: string,
  modelName: string,
  fields: { [field: string]: string },
  options?: {
      allowDuplicate?: boolean,
      duplicateScope?: string,
      duplicateScopeOptions?: {
          deckName?: string,
          checkChildren?: boolean,
          checkAllModels?: boolean
      }
  },
  tags?: [string],
  audio?: [AnkiNoteMedia],
  video?: [AnkiNoteMedia],
  picture?: [AnkiNoteMedia]
}