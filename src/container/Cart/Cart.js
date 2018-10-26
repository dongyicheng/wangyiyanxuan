import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/cart';
import './index.less';
import CartHeader from './CartHeader';
import CartPost from './CartPost';
import CartList from './CartList';
import CartFooter from './CartFooter';

class Cart extends Component {
    componentDidMount(){
        this.props.getCartList();
    }
    render() {
        // console.log(this.props);
        return <div className='box'>
            <CartHeader/>
            <CartPost list={this.props.goodList} />
            <CartList setChoose={this.props.setChoose} setNum={this.props.setNum} list={this.props.goodList}/>
            <CartFooter/>
        </div>
    }
}

export default connect(state => ({...state.cart}),actions)(Cart)
