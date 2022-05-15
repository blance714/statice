import Agent from "../Agent";


const ankiPort = 8765;

type AnkiResponse = { response: any | null }

function executeAnkiAction(action: string, params?: object): Promise<AnkiResponse> {
  return Agent.fetch(`http://localhost:${ankiPort}`, {
    action: action,
    version: 6,
    params: params
  }, 'POST').then(v => (console.log(v), v))
    .then(v => !v.error && ({ response: v.response })
      || (console.log(`[AnkiConnect]Error:${v.error}`), Promise.reject(v.error)))
}

type AnkiNoteMedia = {
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

const Anki : { [method: string]: (params?: any) => Promise<AnkiResponse> } = {
  deckNames: () => executeAnkiAction('deckNames'),
  modelNames: () => executeAnkiAction('modelNames'),
  addNote: (params: AnkiNote) => executeAnkiAction('addNote', params)
}

export default Anki;