import { executeAnkiAction } from "./executeAnkiAction";

export function getModelNames() {
  return executeAnkiAction('modelNames');
}