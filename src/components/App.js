import React from 'react';
// HashRouter is obsolete. We should use BrowserRouter instead,
// but gh-pages need a HashRouter to work correctly.
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './pages/Start';
import Game from './pages/Game';
import End from './pages/End';

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
