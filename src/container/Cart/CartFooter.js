import React from 'react';

export default class CartFooter extends React.Component{
    render(){
        return <div className='cart_footer'>
            <div className='info'>
                <div className='left'>
                    <i className='iconfont icon-radio'></i>
                    <span>已选(2)</span>
                </div>
                <div className='right'>
                    <p className='total'>合计:￥26.00</p>
                    <p className='youhui'>活动优惠:￥30</p>
                </div>
            </div>
            <div className='btn'>下单</div>
        </div>
    }
}