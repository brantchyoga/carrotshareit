import React, { Component } from 'react';
import axios from 'axios';

import '../css/App.css';

class ListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.data.name,
      user: this.props.data.user
    }
  }


  render() {
    let name = this.props.data.name
    let user = this.props.data.user
    console.log("this is the ListItem")
    console.log(this.props.data.name);
    return (
      <li className="listitem">
        Produce: {this.props.data.name} User: {this.props.data.user}
      </li>
    );
  }
}

export default ListItem;
