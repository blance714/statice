import { Engine } from "models/engine";
import Agent from "tools/agent";

const apiURL = 'https://api.mojidict.com/parse/functions/';
const ApplicationID = 'E62VyFVLMiW7kvbtVq3p';

const mojiFetch = (url: string, body?: object) => 
  Agent.fetch(apiURL + url, Object.assign({_ApplicationId: ApplicationID}, body));

const mojiSearch: Engine = {
  searchPassage: passage => 
  mojiFetch('search_v3', { searchText: passage })
    .then(v => v.result.searchResults[0].tarId)
    .then(ID => mojiFetch('nlt-fetchManyLatestWords', {
      itemsJson: [{ objectId: ID }],
      skipAccessories: false
    }))
    .then(v => v.result.result[0])
    .then(v => ({
      engine: "moji",
      word: {
        spell: v.word.spell,
        excerpt: v.word.excerpt,
        accent: v.word.accent,
        pron: v.word.pron,
        type: v.details[0].title
      },
      details: v.subdetails.map(origin => ({
          meaning: origin.title,
          examples: v.examples.filter(e => e.index === origin.index)
            .map(e => ({ sentence: e.title, translate: e.trans }))
        }))
    }))
}

export default mojiSearch;