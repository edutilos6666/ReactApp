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
      <P1Component p={new Person(1, "foo", 10, 100.0, "true")} />
      <P2Component p={new Person(2, "bar", 20, 200.0, "false")} />
      </div>
    );
  }
}


class P1Component extends Component {
  render() {
    return (
      <p>
      {this.props.p.id} {this.props.p.name} {this.props.p.age} {this.props.p.wage} {this.props.p.active}
      </p>
    );
  }
}


class P2Component extends Component {
  render() {
    return (
      <p>
      {this.props.p.id} {this.props.p.name} {this.props.p.age} {this.props.p.wage} {this.props.p.active}
      </p>
    );
  }
}

export default App;
