import React from 'react';
import '../styles/App.css';
// HashRouter is obsolete. We need to use BrowserRouter
// instead, but HashRouter needed for correct work
// of gh-pages
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './Start';
import Game from './Game';
import End from './End';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/end" component={End} />
      </Switch>
    </Router>
  );
}

export default App;
