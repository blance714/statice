import { AnkiNoteFillRule } from "./anki";

export type Config = {
  //Anki
  ankiAddNoteSelection: {
    deck?: string,
    model?: string,
  },
  ankiNoteFillRules: {[model: string]: AnkiNoteFillRule}
};