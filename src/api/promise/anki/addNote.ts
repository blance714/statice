import { AnkiNote } from "models/anki";
import { executeAnkiAction } from "./executeAnkiAction";

export function addNote(params: AnkiNote){
  return executeAnkiAction('addNote', { note: params });
}