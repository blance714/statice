import { Config } from "models/config";
import { defaultConfig } from "models/config/default";
import useSWR from "swr";
import Agent from "./agent";

export function useConfig(): { config?: Config } {
  const { data } = useSWR(`/api/config`, () => Agent.storageGet("config"));
  console.log("useConfig", data);

  return data;
}

export function setConfig(config: Config) {
  console.log(`[setConfig]${(config)}`);
  return Agent.storageSet({ ...config });
}