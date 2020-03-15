import React from 'react';
import Header from './components/header';

function App(): JSX.Element {
  return (
    <div className="App" data-testid="app">
      <Header />
    </div>
  );
}

export default App;
