import React , { Component } from 'react';

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
        <p>{this.props.p1.id} {this.props.p1.name} {this.props.p1.age} {this.props.p1.wage} {this.props.p1.active}</p>
        <p>{this.props.p2.id} {this.props.p2.name} {this.props.p2.age} {this.props.p2.wage} {this.props.p2.active}</p>
      </div>
    );
  }
}


App.defaultProps = {
  p1: new Person(1, "foo", 10, 100.0, "true"),
  p2: new Person(2, "bar", 20, 200.0, "false")
};
export default App;
