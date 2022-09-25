import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/create-blog">
          <Blog />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App