import { getDeckNames } from "api/promise/anki/getDeckNames";
import useSWR from "swr";

export function useDeckNames() {
  const { data, error } = useSWR('/api/anki/deckNames', getDeckNames);

  return {
    deckNames: data,
    error: error
  };
}