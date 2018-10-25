import React, { Component } from 'react'
import Nav from '../component/nav/Nav'
export default class App extends Component {
  render() {
    return <div>
      {this.props.children}
      <Nav/>
  </div>
  }
}
