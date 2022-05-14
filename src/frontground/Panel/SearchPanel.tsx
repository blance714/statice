import { FormEvent, useEffect, useState } from 'react';
import { searchPassage } from '../Search/Search';
import ResultsPanel from './ResultsPanel';
import './SearchPanel.scss';

function SearchPanel({ defaultPassage, show } : { defaultPassage?: string, show?: boolean }) {
  let [results, setResults] = useState<Promise<SearchResult>[]>([]);

  let [passage, setPassage] = useState<string>('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(passage);
    passage && setResults([searchPassage(passage)]); //TODO add multi search engines
    e?.preventDefault();
  }
  const handleDefaultPassage = () => {
    if (defaultPassage) {
      setPassage(defaultPassage);
      console.log(defaultPassage);
      setResults([searchPassage(defaultPassage)]);
    }
  }
  useEffect(() => {
    console.log('2');
    handleDefaultPassage();
  }, [defaultPassage]);

  return (
    <div className="searchPanel" style={{display: show ? 'flex' : 'none'}}>
      <div className='searchBar'>
        <form onSubmit={ handleSubmit }>
          <input type="text" onChange={e => setPassage(e.target.value)}/>
        </form>
      </div>
      <ResultsPanel results={ results } />
    </div>
  )
}

export default SearchPanel;