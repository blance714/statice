import mojiSearch from './moji';

const engines = {
  moji: mojiSearch
}

function searchPassage(passage: string, engine: EngineType = "moji") {
  return engines[engine].searchPassage(passage);
}

export { searchPassage };