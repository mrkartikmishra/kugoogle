import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
