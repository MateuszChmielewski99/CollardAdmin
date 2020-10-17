import React from 'react';
import { AppLayout } from './common/page/layout/AppLayout';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Routes } from './common/routing/Routes';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
