import React, { Component } from 'react'
import Intro from '../../components/Intro';

class App extends Component {
  state = {
    version: 1.001,
  }
  render() {
    return (
      <Intro version={this.state.version}/>
    )
  }
}

export default App
