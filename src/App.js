import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from './Header';
import SimpleBottomNavigation from './Nav'
import Trending from './components/Trending';
import Movies from './components/Movies';
import Search from './components/Search';
import WebSeries from './components/WebSeries';
import Add from './Add';
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
     <Header/>
      <div className="app">
      <Container>
        <Switch>
          
        <Route path ='/' component = {Trending} exact/>
        <Route path ='/Movies' component = {Movies}/>
        <Route path ='/WebSeries' component = {WebSeries}/>
        <Route path ='/Search' component = {Search}/>

        </Switch>
      </Container>
     </div>
     <Add/>
    <SimpleBottomNavigation/>
    </BrowserRouter>
   
  );
}

export default App;
