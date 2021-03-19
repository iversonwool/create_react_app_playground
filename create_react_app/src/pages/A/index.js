import React, { Component } from 'react';

class A extends Component {
  render() {
    console.log('A render called')
    const {text} = this.props
    return (
      <div>
        A:text{text}
      </div>
    );
  }
}

export default A;