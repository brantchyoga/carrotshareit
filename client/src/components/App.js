import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './post.js';
import List from './list.js';
import Home from './home.js';
import Show from './show.js';

import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Carrot Share It</h1>
        </header>
        <p className="App-intro">
          Welcome to CarrotShareIt an online pressence for sharing your Healthy Urban Garden.
        </p>
        <nav>
          <Router>
            <div>
              <Link to='/post'>Post</Link>
              <br/>
              <Link to='/'>Home</Link>
              <br/>
              <Route exact path='/' component={Home} />
              <Route path='/post' component={Post} />
              <Route path='/show' component={Show} />
            </div>
          </Router>
        </nav>


      </div>
    );
  }
}

export default App;
