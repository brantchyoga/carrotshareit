import React, { Component } from 'react';
import axios from 'axios';

import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      something:'something'
    }
  }
  click = () =>{
    axios.post('/search',{can:'working'}).then(result =>{
      console.log(result.data);
    })
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
        <button onClick={this.click}>working</button>
      </div>
    );
  }
}

export default App;
