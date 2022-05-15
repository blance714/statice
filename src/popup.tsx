import SearchPanel from './frontground/Panel/SearchPanel';
import Anki from './frontground/tools/anki';
import renderRoot from './renderRoot';

renderRoot(
  () => <div style={{ fontSize: '100%' }}>
    <SearchPanel />
  </div>
);

Anki.deckNames()