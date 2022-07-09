export type WordInfos = {
  spell: string,
  meaning: string,
  numberAccent?: string,
  pron: string,
  type?: string,
  example?: {
    sentence: string,
    translate: string
  }
};