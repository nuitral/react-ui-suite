import React from 'react';
import ReactDOM from 'react-dom/client';
import { NuitralButton } from '../lib';

function App() {
  return (
    <div>
      <h1>Nuitral React UI Suite</h1>
      <NuitralButton />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
