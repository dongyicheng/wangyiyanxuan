import React, { Component } from 'react'
import './index.less';
import CartHeader from './CartHeader';
import CartPost from './CartPost';
import CartList from './CartList';
import CartFooter from './CartFooter';

export default class Cart extends Component {
  render() {
    return <div className='box'>
        <CartHeader/>
        <CartPost/>
        <CartList/>
        <CartFooter/>
    </div>
  }
}
