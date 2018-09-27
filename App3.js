import React, { Component } from 'react';
import './customStyle.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: ["Id", "Name", "Age", "Wage", "Active"],
      people: [
        {
          id: 1,
          name: "foo",
          age: 10,
          wage: 100.0,
          active: "true"
        },
        {
          id: 2,
          name: "bar",
          age: 20,
          wage: 200.0,
          active: "false"
        },
        {
          id: 3,
          name: "bim",
          age: 30,
          wage: 300.0,
          active: "true"
        },
        {
          id: 4,
          name: "pako",
          age: 40,
          wage: 400.0,
          active: "false"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <table className="customers">
            <Header data= {this.state.headers} />
            <Content data = {this.state.people} />
         </table>
      </div>
    );
  }
}


class Header extends Component {
  render() {

    return (
      <thead>
          <tr>
            {this.props.data.map((header,i)=> <th key={i}>{header}</th>)}
          </tr>
      </thead>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.wage}</td>
        <td>{this.props.data.active}</td>
      </tr>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <tbody>
      {this.props.data.map((person,i)=> <TableRow key={i} data={person} />)}
      </tbody>
    );
  }
}

export default App;
