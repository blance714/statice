import { getModelFieldNames } from "api/promise/anki/getModelFieldNames";
import useSWR from "swr";

export function useModelFieldNames(modelName?: string) {
  const { data, error } = 
    useSWR(`/api/anki/modelFieldNames?modelName=${modelName}`,
      () => modelName
        ? getModelFieldNames(modelName)
        : Promise.reject('modelName is required'));
  
  return {
    modelFieldNames: data,
    isLoading: !data && !error,
    error: error
  };
}