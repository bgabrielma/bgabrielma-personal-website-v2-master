import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

// Components
import Home from '../Home/Home'
import Works from '../Works/Works'
import AppNavbar from '../Navbar/Navbar'
import NotFound from '../NotFound/NotFound'

export default class App extends Component {
  state = {}
  render() {
    return (
      <div className="app-site">
        <header>
          <AppNavbar />
          <div className="separator-frame sf-color-lightblue sf-h-5" />
        </header>
        <main className="app-content">
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="home" />} />
              <Route path="/home" render={Home} />
              <Route path="/works" render={Works} />
              <Route render={NotFound} />
            </Switch>
          </Router>
        </main>
        <footer>bgabrielma.work - github.com/bgabrielma</footer>
      </div>
    )
  }
}
