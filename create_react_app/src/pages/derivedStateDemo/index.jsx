import React, { Component } from 'react';

class DerivedStateDemo extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('this.props', this.props)
  }
  changeState = ()=> {
    this.setState({
      myLocalText: 'hello'
    })
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.props.array)}
        {this.props.text}

        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}

export default DerivedStateDemo;