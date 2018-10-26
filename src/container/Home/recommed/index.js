import React, { Component } from 'react'
import Swiper from './Swiper';
import Scroll from './Scroll';
import './index.less'

export default class recommend extends Component {
  render() {
    console.log(this.props.list)
    return (
      <div>
        <Swiper sliders={this.props.sliders}/>
        <Scroll list={this.props.list}/>
      </div>
    )
  }
}
