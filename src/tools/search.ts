import { EngineType, TranslateEngineType } from 'models/engine';
import mojiSearch from './engines/moji';
import { youdaoTranslate } from './engines/youdaoTranslate';

const engines = {
  moji: mojiSearch
}

export function searchPassage(passage: string, engine: EngineType = "moji") {
  return engines[engine].searchPassage(passage);
}

const translateEngines = {
  youdao: youdaoTranslate
};

export function translateSentence(sentence: string, engine: TranslateEngineType = "youdao") {
  const result = translateEngines[engine].translateSentence(sentence);
  console.log('translateSentence', result);
  return result;
}