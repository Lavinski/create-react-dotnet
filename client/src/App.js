import React from 'react';
import { Suspense } from 'react'
import ServerList from './ServerList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback="Loading...">
          <ServerList/>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
