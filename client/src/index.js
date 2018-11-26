import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import 'typeface-roboto'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Notepad from './components/Notepad'
import ListCards from './components/ListCards'
import RegisterForm from './components/RegisterForm'

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path='/' exact component={RegisterForm}/>
    <Route path='/interview/:id' exact component={App}/>
    <Route path='/persons' exact component={ListCards}/>
    <Route path='*' component={Notepad}/>
  </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
