import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

class App extends C {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  change(v) {
    this.setState(({ value }) => ({ value: v }));
  }
  render() {
    return(<div>
      <input value={ this.state.value }
             onChange={({ target: { value: v } }) => this.change(v)} /><br/>
      <input value={ this.state.value }
             onChange={({ target: { value: v } }) => this.change(v)} />
    </div>)
  }
}

r(<App />, document.querySelector('.inputs'))