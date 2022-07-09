import { getModelNames } from "api/promise/anki/getModelNames";
import useSWR from "swr";

export function useModelNames() {
  const { data, error } = useSWR("/api/anki/modelNames", getModelNames);

  return {
    modelNames: data,
    isLoading: !error && !data,
    error: error
  };
}