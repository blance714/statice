import { SearchResult } from "models/search";
import ResultContent from "./ResultContent";

import './ResultsPanel.scss'

function ResultsPanel({ results }: 
  { results: Promise<SearchResult>[] }) {
  return (
    <div className="resultsPanel">
      {results.map(result => (
        <ResultContent resultPromise={ result } />
      ))}
    </div>
  );
}

export default ResultsPanel;