import React from 'react';
import Gamelist from './components/Gamelist'
import Screenshots from './components/Screenshots'
import {Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path ="/" component={Gamelist}></Route>
      <Route path ="/jeu/screenshots/:id" component={Screenshots}></Route>
    </Switch>
    </div>
  );
}

export default App;
