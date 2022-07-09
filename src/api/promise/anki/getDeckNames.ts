import { executeAnkiAction } from "./executeAnkiAction";

export function getDeckNames() {
  return executeAnkiAction('deckNames');
}