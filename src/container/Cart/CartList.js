import React from 'react';

export default class CartList extends React.Component{
    render(){
        return <div className='cart_list'>
            <ul>
                <li>
                    <div className='choose'>√</div>
                    <div className='cart_img'>
                        <img src="http://yanxuan.nosdn.127.net/91b621e96c5c5cad6a86f7eddb8764d3.png?imageView&thumbnail=160x0&quality=75" alt=""/>
                    </div>
                    <div className='info_box'>
                        <p className='title'>棒球帽</p>
                        <p className='props'>粉色</p>
                        <div className='foot'>
                            <span className='price'>￥47</span>
                            <span className='del_price'>￥59</span>
                            <div className='change_num'>
                                <div className='min'>-</div>
                                <div className='num'>2</div>
                                <div className='add'>+</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='choose'>√</div>
                    <div className='cart_img'>
                        <img src="http://yanxuan.nosdn.127.net/91b621e96c5c5cad6a86f7eddb8764d3.png?imageView&thumbnail=160x0&quality=75" alt=""/>
                    </div>
                    <div className='info_box'>
                        <p className='title'>棒球帽</p>
                        <p className='props'>粉色</p>
                        <div className='foot'>
                            <span className='price'>￥47</span>
                            <span className='del_price'>￥59</span>
                            <div className='change_num'>
                                <div className='min'>-</div>
                                <div className='num'>2</div>
                                <div className='add'>+</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    }
}