import SearchPanel from 'contents/SearchPanel';
import renderRoot from './tools/renderRoot';

renderRoot(
  () => <div style={{
    fontSize: '100%', width: '400px', height: '600px'
    }}>
    <SearchPanel defaultPassage='233' show/>
  </div>
);