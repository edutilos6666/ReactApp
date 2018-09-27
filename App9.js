import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:0
    };

    this.incrementNumber = this.incrementNumber.bind(this);
    this.decrementNumber = this.decrementNumber.bind(this);
  }
  incrementNumber() {
    this.setState({data:this.state.data+1});
  }
  decrementNumber() {
    this.setState({data:this.state.data-1});
  }

  render() {
    return (
      <div>
      <Content myNumber = {this.state.data} />
      <button onClick={this.incrementNumber}>increment</button>
      <button onClick={this.decrementNumber}>decrement</button>
      </div>
    );
  }
}


class Content extends Component {
  componentWillMount() {
    console.log("componentWillMount()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps()");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate()");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
