import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'

// Components
import Home from '../Home/Home'
import AppNavbar from '../Navbar/Navbar'

export default class App extends Component {
  state = {}
  render() {
    return (
      <div className="app-site">
        <header>
          <AppNavbar />
        </header>
        <main className="app-content">
          <Router>
            <Switch>
              <Route path="/" exact render={Home} />
            </Switch>
          </Router>
        </main>
        <footer>bgabrielma.work - github.com/bgabrielma</footer>
      </div>
    )
  }
}
