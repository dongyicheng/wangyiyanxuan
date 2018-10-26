import React from 'react';

export default class CartPost extends React.Component{
    render(){
        return <div className='cart_post'>
            <span className='post_desc'>再购50.00元满足免邮条件</span>
            <span className='post_more'>&gt;</span>
        </div>
    }
}