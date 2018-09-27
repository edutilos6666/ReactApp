import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
    };
    this.myDomStyle = {
      color: 'red',
      backgroundColor: 'yellow'
    };
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);
    this.printPropsHandler = this.printPropsHandler.bind(this);
  }

  setStateHandler() {
    const item = "setState...";
    const myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data:myArray});
  }

  //update component manually
  forceUpdateHandler() {
    this.forceUpdate();
  }

  findDOMNodeHandler() {
    const myDom = document.getElementById("myDom");
    console.log(this.myDomStyle);
    ReactDOM.findDOMNode(myDom).style.color = this.myDomStyle.color;
    ReactDOM.findDOMNode(myDom).style.backgroundColor = this.myDomStyle.backgroundColor;
  }

  printPropsHandler() {
    const inputIdValue = ReactDOM.findDOMNode(document.getElementById("inputId")).value;
    const inputNameValue = ReactDOM.findDOMNode(document.getElementById("inputName")).value;
    const inputAgeValue = ReactDOM.findDOMNode(document.getElementById("inputAge")).value;
    const inputWageValue = ReactDOM.findDOMNode(document.getElementById("inputWage")).value;
    const inputActiveValue = ReactDOM.findDOMNode(document.getElementById("inputActive")).value;
    const msg = `id = ${inputIdValue}
name = ${inputNameValue}
age = ${inputAgeValue}
wage = ${inputWageValue}
active = ${inputWageValue}
    `;
    console.log(msg);
  }

  render() {
    return (
      <div>
        <button onClick={this.setStateHandler}>set state</button>
        <h4>{this.state.data}</h4>
        <button onClick={this.forceUpdateHandler}>force update</button>
        <h4>Random Number: {Math.random()}</h4>
        <button onClick={this.findDOMNodeHandler}>findDOM</button>
        <div id="myDom">Hello World from myDom</div>
        <br/><br/>
        id: <input type="text" id="inputId" /> <br/>
        name: <input type="text" id="inputName" /> <br/>
        age: <input type="text" id="inputAge" /> <br/>
        wage: <input type="text" id="inputWage" /> <br/>
        active: <input type="text" id="inputActive" /> <br/>
        <button onClick={this.printPropsHandler}>print input properties</button>
      </div>
    );
  }
}


export default App;
