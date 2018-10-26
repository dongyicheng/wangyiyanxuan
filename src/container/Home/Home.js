import React, { Component } from 'react'
import HomeSearch from './HomeSearch'
import { connect } from 'react-redux';
import action from '../../store/action/home';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Recommend from './recommed';

class Home extends Component {
  componentDidMount(){
    this.props.getList()
    this.props.getSlider()
  }
  render() {
    return (
      <div>
        <HomeSearch list={this.props.list}/>
        <Recommend sliders={this.props.sliders}/>
      </div>
    )
  }
}

export default connect(state=>({...state.home}),action)(Home)