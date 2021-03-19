import React, { Component } from 'react';

class DerivedStateDemo extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('this.props', this.props)
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.array)}
        {this.props.text}
      </div>
    );
  }
}

export default DerivedStateDemo;