import { SearchResult, SelectionSentence } from 'models/search';
import { FormEvent, useEffect, useState } from 'react';
import { searchPassage, translateSentence } from 'tools/search';
import ResultsPanel from './ResultsPanel';
import './index.scss';

function SearchPanel({ defaultPassage, sentence, show } 
    : { defaultPassage?: string, sentence?: SelectionSentence, show?: boolean }) {
  let [results, setResults] = useState<Promise<SearchResult>[]>([]);

  let [passage, setPassage] = useState<string>('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(passage);
    passage && setResults([searchPassage(passage)]); //TODO add multi search engines
    e?.preventDefault();
  }
  useEffect(() => {
    if (defaultPassage) {
      setPassage(defaultPassage);
      console.log(defaultPassage);
      setResults([searchPassage(defaultPassage)]);
    }
  }, [defaultPassage]);

  let [translate, setTranslate] = useState<Promise<string> | undefined>(undefined);
  useEffect(() => {
    if (sentence?.normal) setTranslate(translateSentence(sentence.normal));
  }, [sentence]);


  return (
    <div className="searchPanel" style={{display: show ? 'flex' : 'none'}}>
      <div className='searchBar'>
        <form onSubmit={ handleSubmit }>
          <input type="text" onChange={e => setPassage(e.target.value)}/>
        </form>
      </div>
      <ResultsPanel results={ results } sentence={ sentence } sentenceTranslate={ translate }/>
    </div>
  )
}

export default SearchPanel;