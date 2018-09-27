import React , { Component } from 'react';

class Person {
  constructor(id,name,age,wage,active) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.wage = wage;
    this.active = active;
  }
  // get id() {
  //   return this.id;
  // }
  // get name() {
  //   return this.name;
  // }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        new Person(1, "foo", 10, 100.0, "true"),
        new Person(2, "bar", 20, 200.0, "false"),
        new Person(3, "bim", 30, 300.0, "true")
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.people.map((person,i)=> <p key={i}>{person.id} {person.name} {person.age} {person.wage} {person.active}</p>)}
      </div>
    );
  }
}

export default App;
