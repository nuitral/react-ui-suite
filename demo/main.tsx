import React from 'react';
import ReactDOM from 'react-dom/client';
import { NuitralButton } from '../lib';
import Navbar from './widgets/navbar';
import './style.scss';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Nuitral React UI Suite</h1>
      <NuitralButton />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
