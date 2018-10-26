import React, { Component } from 'react'
import Swiper from './Swiper';
import './index.less'

export default class recommend extends Component {
  render() {
    console.log(this.props.sliders)
    return (
      <div>
        <Swiper sliders={this.props.sliders}/>
      </div>
    )
  }
}
