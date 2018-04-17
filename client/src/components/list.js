import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './listitem';

import '../css/App.css';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:this.props.data
    }
  }


  render() {
    let blah = null
    let data = []
    if(this.props.data){
      data = Array.from(this.props.data)
      console.log("WE ARE IN THE LIST")
      console.log(data)
      blah = data.map(item => {
        return <ListItem data={item} />
      })
      console.log(blah)
    }

    return (
      <div className="">
        <header>
          <h3>Produce in Your Area!</h3>
        </header>
        <ul>
          {blah}
        </ul>
      </div>
    );
  }
}

export default List;
