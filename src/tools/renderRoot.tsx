import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function renderRoot(Element: () => JSX.Element, rootDiv: HTMLElement = document.getElementById('root')!) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <React.StrictMode>
      <Element />
    </React.StrictMode>
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

export default renderRoot;