import React, { Component } from 'react';
class App extends Component {
  render() {
    const _id  = 1;
    const name = "foo";
    const age = 10;
    const wage = 100.0;
    const active = false;

    const h1Style = {
      color: 'red'
    };

    const h2Style = {
      color: 'green'
    };

    const h3Style = {
      color: 'blue'
    };

    return (
      <div>
        {/*That is h1*/}
        <h1 style={h1Style}>Header 1</h1>
        {/*That is h2
          within multi-line comment
          */}
        <h2 style={h2Style}>Header 2</h2>
        <h3 style={h3Style}>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>randomNumber: {Math.random()}</p>
        <p>id = {id}</p>
        <p>name = {name}</p>
        <p>age = {age}</p>
        <p>wage = {wage}</p>
        <p>active = {active}</p>
        <p>{age <= 10?'teenage':'adult'}</p>
      </div>
    );
  }
}

// export default App;
