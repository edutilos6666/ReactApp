import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Person {
  constructor(id,name,age,wage,active) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.wage = wage;
    this.active = active;
  }
}

class App extends Component {
  render() {
    return (
      <div>
      <h3>Array: {this.props.propArray}</h3>
      <h3>Bool: {this.props.propBool? "True":"False"}</h3>
      <h3>FuncAdd: {this.props.propFuncAdd(10,3)}</h3>
      <h3>FuncSub: {this.props.propFuncSub(10,3)}</h3>
      <h3>FuncMult: {this.props.propFuncMult(10,3)}</h3>
      <h3>FuncDiv: {this.props.propFuncDiv(10,3)}</h3>
      <h3>Number: {this.props.propNumber}</h3>
      <h3>String: {this.props.propString}</h3>
      <h3>Object: {this.props.propObject.objName1}</h3>
      <h3>Object: {this.props.propObject.objName2}</h3>
      <h3>Object: {this.props.propObject.objName3}</h3>
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFuncAdd: PropTypes.func,
  propFuncSub: PropTypes.func,
  propFuncMult: PropTypes.func,
  propFuncDiv: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

App.defaultProps =  {
  propArray: ["foo", "bar", "bim", "pako"],
  propBool: true,
  propFuncAdd: (a,b)=> a + b,
  propFuncSub: (a,b)=> a - b,
  propFuncMult: (a,b) => a * b,
  propFuncDiv: (a,b) => a / b,
  propNumber: 1234567,
  propString: "hello world",
  propObject: {
    objName1: "edu",
    objName2: "leonel",
    objName3: "cristiano"
  }
}

export default App;
