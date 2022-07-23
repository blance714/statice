import { createContext, useEffect, useRef, useState } from "react"
import SearchPanel from "contents/SearchPanel";

import './index.scss'
import qwqImg from './qwq.gif';
import { AnkiAddNote } from "contents/AnkiAddNote";
import { SearchResultNote } from "models/config/anki";
import { getSelectionSentence, getSelectionText, hasSelection } from "tools/sentence";
import { SelectionSentence } from "models/search";

export const AnkiContext = createContext<any>(undefined);

function ContentWrapper() {
  const [state, setState] = useState(0);
  const [selection, setSelection] = useState('');
  const [sentence, setSentence] = useState<SelectionSentence>({});
  const [position, setPosition] = useState([0, 0]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let selectionHasChanged = false;
    const handler = (e: MouseEvent) => {
      if (!selectionHasChanged) return;
      selectionHasChanged = false;
      const sel = document.getSelection();
      // const range = document.getSelection()?.getRangeAt(0);
      if (!sel || !hasSelection(sel)) setState(0);
      else {
        setState(state => state ? state : 1);
        console.log('handler');
        setSelection(getSelectionText(sel));
        setSentence(getSelectionSentence(sel));
        setPosition([e.clientX + 40, e.clientY - 40]);
      }
    }
    const selectionChangeHandler = e => {
      selectionHasChanged = true;
      console.log('selectionHasChanged');
    }

    document.addEventListener('selectionchange', selectionChangeHandler);
    document.body.addEventListener('mouseup', handler);
    return () => {
      document.removeEventListener('selectionchange', selectionChangeHandler);
      document.body.removeEventListener('mouseup', handler);
    }
  }, []);

  //AnkiAddNote
  const [showAnkiAddNote, setShowAnkiAddNote] = useState(false);
  const [note, setNote] = useState<SearchResultNote>();
  const setSearchResultNote = (note: SearchResultNote) => {
    setNote(note);
    setShowAnkiAddNote(true);
  }

  return (
    <AnkiContext.Provider value={{ showAnkiAddNote, setSearchResultNote }}>
      <div className="content-background">
        <div ref={ divRef } className='content-wrapper' style={{
          position: 'absolute',
          zIndex: 1000,
          left: position[0], top:position[1]
        }}>
          <img className="staticeIcon" src={qwqImg} style={{display: state === 1 ? 'block' : 'none'}}
            onClick={e => {
              setState(2);
              e.stopPropagation();
          }} />
          <SearchPanel defaultPassage={ selection } sentence={ sentence } show={ state === 2 }/>
        </div>
        {showAnkiAddNote && 
          <div className="content-ankiaddnote">
            <AnkiAddNote onClose={() => setShowAnkiAddNote(false)} searchResultNote={note}/>
          </div>
        }
      </div>
    </AnkiContext.Provider>
  )
}

export default ContentWrapper;