import { SearchResultNote } from "models/config/anki";
import { SearchResult, SelectionSentence } from "models/search";
import { AnkiContext } from "pages/ContentWrapper";
import { useContext, useEffect, useState } from "react";
import ResultContent from "./ResultContent";

import './ResultsPanel.scss'

function ResultsPanel({ results, sentence, sentenceTranslate, showAnkiAddNote }: 
  { results: Promise<SearchResult>[], sentence?: SelectionSentence,
    sentenceTranslate?: Promise<string>, showAnkiAddNote?: boolean }) {
  const [translate, setTranslate] = useState<string>('');

  useEffect(() => {
    setTranslate('');
    sentenceTranslate?.then(setTranslate);
  }, [sentenceTranslate]);

  const ankiContext = useContext(AnkiContext);
  const addToAnki = (note: SearchResultNote) => {
    ankiContext.setSearchResultNote(Object.assign(note, {
      sentence: sentence?.bold, 
      translate: translate,
      pronAccent: note.accent && note.pron ? `${note.pron}${note.accent}` : undefined
    }));
  }
  
  return (
    <div className="resultsPanel">
      { sentence && <div className="sentence">
          <div className="sentence-text">{ sentence.normal }</div>
          { sentenceTranslate && <div className="sentence-translate">{ translate }</div> }
        </div>}
      {results.map(result => (
        <ResultContent resultPromise={ result } addToAnki={ addToAnki }/>
      ))}
    </div>
  );
}

export default ResultsPanel;