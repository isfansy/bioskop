import React from 'react';
import Header from './components/header'
import Home from './pages/Home'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Manageadmin from './pages/manageadmin'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path={'/'} exact>
          <Home/>
        </Route>
        <Route path={'/manageadmin'}exact>
          <Manageadmin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
