import React, { Component } from 'react';

class Display extends Component{
  render(){
    return(
      <div>
        {this.props.initialCount}
      </div>
    )
  }
}

export default Display;
