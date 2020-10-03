import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeContainer from './containers/Home'

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/cart" />
        <Route exact path="/register"  />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
