import React, { Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Porto from './components/pages/Portofolio';
import Profile from './components/pages/Profile';
import Header from './components/templates/Header';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/portofolio" exact component={Porto} />
        <Route path="/profile" exact component={Profile} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
