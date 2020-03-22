import React from 'react';

import Header from './components/header';
import Routes from './router/routes';

function App(): JSX.Element {
  return (
    <div className="App" data-testid="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
