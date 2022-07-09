import { executeAnkiAction } from "./executeAnkiAction";

export function getModelFieldNames(modelName: string) {
  return executeAnkiAction('modelFieldNames', {
    modelName: modelName
  });
}