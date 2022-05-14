import { useEffect, useRef, useState } from "react"
import SearchPanel from "./Panel/SearchPanel";

import './ContentWrapper.scss'
import qwqImg from './qwq.gif';

function ContentWrapper() {
  const [state, setState] = useState(0);
  const [selection, setSelection] = useState('');
  const [position, setPosition] = useState([0, 0]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let selectionHasChanged = false;
    const handler = (e: MouseEvent) => {
      if (!selectionHasChanged) return;
      selectionHasChanged = false;
      const sel = document.getSelection();
      if (!sel || sel.getRangeAt(0).collapsed)  setState(0);
      else {
        const str = sel?.toString();
        if (str) {
          setState(state => state ? state : 1);
          console.log('handler');
          setSelection(str);
          setPosition([e.pageX + 40, e.pageY - 40]);
        }
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

  return (
    <div ref={ divRef } id='content-wrapper' style={{
      position: 'absolute',
      zIndex: 1000,
      left: position[0], top:position[1]
    }}>
      <img className="staticeIcon" src={qwqImg} style={{display: state === 1 ? 'block' : 'none'}}
        onClick={e => {
          setState(2);
          e.stopPropagation();
      }} />
      <SearchPanel defaultPassage={ selection } show={ state === 2 }/>
    </div>
  )
}

export default ContentWrapper;