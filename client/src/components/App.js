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
    let zip = this.zipInput.value
    let user = this.nameInput.value
    let name = this.typeInput.value
    let pickup = this.locationInput.value
    let description = this.descInput.value
    axios.post('/search',{zip,user,name,pickup,description}).then(result =>{
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
        <div>
          <input type='number' placeholder='Zip code' ref={(input)=>{this.zipInput = input;}} name='zip'/>
          <input type='text' placeholder='Your Name' ref={(input)=>{this.nameInput = input;}}name='name'/>
          <input type='text' placeholder='Type/Name' ref={(input)=>{this.typeInput = input;}} name='type'/>
          <input type='text' placeholder='Pickup location' ref={(input)=>{this.locationInput = input;}} name='pick'/>
          <input type='text' placeholder='Description' ref={(input)=>{this.descInput = input;}} name='desc'/>
          <button onClick={this.click}>working</button>
        </div>

      </div>
    );
  }
}

export default App;
