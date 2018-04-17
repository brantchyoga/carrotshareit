import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import List from './list.js'

import '../css/App.css';

const mapDispatchToProps = dispatch => {
  return {
  }
}
const mapStateToProps = state =>{
  return {user: state.user}
}

class ConnectedHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip:null,
      data:null
    }
  }

  handleInput = (e) =>{
    e.preventDefault();
    this.setState({zip:e.target.value})
  }
  click = () =>{
    let zip = this.state.zip
    console.log(zip)
    axios.post('/list',{zip}).then(result =>{
      console.log(result.data)
      this.setState({
        data:result.data
      })
      console.log(this.state.data);
    })
  }
  render() {
    return (
      <div className="Search">
        <input type='number' placeholder='Zip code' onChange={(e)=>this.handleInput(e)}/>
        <button onClick={this.click}>working</button>
        <List data={this.state.data} />

      </div>
    );
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectedHome);
export default Home;
