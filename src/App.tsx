import React, { useContext } from 'react';

import Header from './components/header';
import Routes from './router/routes';
import { Auth0Context } from './router/auth0Context';
import Loading from './components/loading';

function App(): JSX.Element {
  const { loading } = useContext(Auth0Context);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App" data-testid="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
