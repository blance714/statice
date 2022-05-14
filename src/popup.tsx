import SearchPanel from './frontground/Panel/SearchPanel';
import renderRoot from './renderRoot';

renderRoot(
  () => <div style={{ fontSize: '100%' }}>
    <SearchPanel />
  </div>
);