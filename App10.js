import React , { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
        id: "default",
        name: "default",
        age: "default",
        wage: "default",
        active: "default"
    };

    this.updateIdState = this.updateIdState.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
    this.updateAgeState = this.updateAgeState.bind(this);
    this.updateWageState = this.updateWageState.bind(this);
    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateIdState(e) {
    this.setState({'id': e.target.value});
  }
  updateNameState(e) {
    this.setState({'name': e.target.value});
  }
  updateAgeState(e) {
    this.setState({'age': e.target.value});
  }
  updateWageState(e) {
    this.setState({'wage': e.target.value});
  }
  updateActiveState(e) {
    this.setState({'active': e.target.value});
  }

  render() {
    return (
      <div>
      <Content
      idValue={this.state.id} idChangedHandler={this.updateIdState}
      nameValue={this.state.name} nameChangedHandler={this.updateNameState}
      ageValue={this.state.age} ageChangedHandler={this.updateAgeState}
      wageValue={this.state.wage} wageChangedHandler={this.updateWageState}
      activeValue={this.state.active} activeChangedHandler={this.updateActiveState}
      />
      </div>
    );
  }
}


class Content extends Component {
  render() {
    return (
      <div>
      <input type="text" value={this.props.idValue} onChange={this.props.idChangedHandler} /> <br/>
      <input type="text" value={this.props.nameValue} onChange={this.props.nameChangedHandler} /> <br/>
      <input type="text" value={this.props.ageValue} onChange={this.props.ageChangedHandler} /> <br/>
      <input type="text" value={this.props.wageValue} onChange={this.props.wageChangedHandler} /> <br/>
      <input type="text" value={this.props.activeValue} onChange={this.props.activeChangedHandler} /> <br/>
      <h3>Content</h3>
      id: {this.props.idValue} <br/>
      name: {this.props.nameValue} <br/>
      age: {this.props.ageValue} <br/>
      wage: {this.props.wageValue} <br/>
      active: {this.props.activeValue === "true"?"true":"false"} <br/>
      </div>
    );
  }
}

export default App;
