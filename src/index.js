import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Notepad from './components/Notepad';
import ListCards from './components/ListCards';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={ListCards}/>
    <Route path='/interview/:id' exact component={App}/>
    <Route path='*' component={Notepad}/>
  </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
