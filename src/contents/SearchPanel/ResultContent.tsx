import { SearchResultNote } from "models/config/anki";
import { SearchResult } from "models/search";
import { AnkiContext } from "pages/ContentWrapper";
import { ReactElement, useContext, useEffect, useState } from "react";

import './ResultContent.scss';

function ResultContent({ resultPromise, addToAnki }: { resultPromise: Promise<SearchResult>, addToAnki: (note: SearchResultNote) => void }) {
  const [state, setState] = useState<
    { state: 0 } | { state: 1, result: SearchResult } | { state: 2, error: Error }
  >({ state: 0 });

  useEffect(() => {
    setState({ state: 0 });
    resultPromise
      .then(v => setState({ state: 1, result: v }))
      .catch(r => setState({ state: 2, error: r }));
  }, [resultPromise]);

  const ankiContext = useContext(AnkiContext);

  let content: ReactElement;
  if (state.state === 0)  content = <span>Loading...</span>;
  else if (state.state === 1) {
    const { result: { word, details } } = state;
    content = (
      <>
        <div className="title">
          <span className="word">{ word.spell }</span>
          <span className="pron">{ word.pron }</span>
          <span className="accent">{ word.accent }</span>
        </div>
        <span className="excerpt">{ word.excerpt }</span>
        <span className="type">{ word.type }</span>
        <div className="details">{
          details.map((detail, index) => (
            <div className="detail" key={ index }>
              <h3 className="meaning">{ detail.meaning }
                {ankiContext && <div className="add-button"
                  onClick={ () => addToAnki({
                    spell: word.spell,
                    meaning: detail.meaning,
                    accent: word.accent,
                    pron: word.pron,
                    type: word.type
                    //TODO sentence: context
                  }) }
                >+ Add to Anki</div>}
              </h3>
              <div className="examples">{
                detail.examples.map(example => (
                  <div className="example">
                    <div className="sentence">{ example.sentence }</div>
                    <div className="translate">{ example.translate }</div>
                  </div>
                ))
              }</div>
            </div>
          ))
        }</div>
      </>
    );
  } else  content = <span>Error: { state.error.message }</span>;


  return (
    <div className="resultContent">
      { content }
    </div>
  );
}

export default ResultContent;