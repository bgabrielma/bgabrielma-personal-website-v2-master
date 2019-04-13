import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'

// Components import
import Home from '../Home/Home'

class App extends Component {
  state = {}
  render() {
    return (
      <div className="app-site">
        <header>
          <nav>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </nav>
        </header>
        <main className="app-content">
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Home {...this.state} />} />
            </Switch>
          </Router>
        </main>
        <footer>bgabrielma.work - github.com/bgabrielma</footer>
      </div>
    )
  }
}

export default App
