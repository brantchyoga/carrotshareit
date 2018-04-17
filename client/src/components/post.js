import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {liftPostData} from '../redux/actions/index';
import { Redirect } from 'react-router-dom';

import '../css/App.css';

const mapDispatchToProps = dispatch => {
  return {
    liftPostData: data => dispatch(liftPostData(data))
  }
}

class ConnectedPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: null,
      user: null,
      type: null,
      pick: null,
      desc: null,
      redirect:false
    }
  }

  handleStateInputChange = (e) => {
      e.preventDefault(e)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  click = () =>{
    let zip = this.state.zip
    let user = this.state.user
    let name = this.state.type
    let pickup = this.state.pick
    let description = this.state.desc
    console.log(zip,user,name,pickup)
    axios.post('/search',{zip,user,name,pickup,description}).then(result =>{
      console.log(result.data);
      this.props.liftPostData(result.data);
      if (result.data){
        this.setState({
          zip: null,
          user: null,
          type: null,
          pick: null,
          desc: null,
          redirect:true
        })
      }
    })
  }

  render() {
    console.log(this.props);
    if (this.state.redirect) {
      return (<Redirect to='/' />)
    }
    return (
      <div className="">
        <div>
          <input type='number' placeholder='Zip code' onChange={(e)=>this.handleStateInputChange(e)} name='zip'/>
          <input type='text' placeholder='Your Name' onChange={(e)=>this.handleStateInputChange(e)} name='user'/>
          <input type='text' placeholder='Type/Name' onChange={(e)=>this.handleStateInputChange(e)} name='type'/>
          <input type='text' placeholder='Pickup location' onChange={(e)=>this.handleStateInputChange(e)} name='pick'/>
          <input type='text' placeholder='Description' onChange={(e)=>this.handleStateInputChange(e)} name='desc'/>
          <button onClick={this.click}>working</button>
        </div>

      </div>
    );
  }
}

const Post = connect(null, mapDispatchToProps)(ConnectedPost);
export default Post;
