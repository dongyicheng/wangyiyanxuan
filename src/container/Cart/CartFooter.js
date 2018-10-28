import React from 'react';

export default class CartFooter extends React.Component{
    render(){
        let num = 0,youhui = 0,total = 0,delNum = 0;
        if(this.props.list.length){
            this.props.list.forEach((item)=>{
                if(item.isSelected){
                    num += item.num;
                    total += Number(item.price.slice(1)) * item.num;
                    youhui += (Number(item.del_price.slice(1)) - Number(item.price.slice(1))) * item.num;
                }
                if(item.delSelect){
                    delNum += item.num;
                }
            });
        }

        return <div className='cart_footer'>
            <div className='info'>
                <div className='left'>
                    {this.props.allStatus ? <i onClick={() => {this.props.setChoose()}} className='iconfont icon-gouxuan'></i>: <i onClick={() => {this.props.setChoose()}} className='iconfont icon-radio'></i>}
                    <span>已选({this.props.curType? num : delNum})</span>
                </div>

                {this.props.curType ? <div className='right'>
                    <p className='total'>合计:￥{total}.00</p>
                    <p className='youhui'>活动优惠:￥{youhui}</p> : ''}
                </div> : ''}

            </div>

            {this.props.curType ? <div className='btn'>下单</div>: <div onClick={() => {this.props.delData()}} className='btn'>删除所选</div>}

        </div>
    }
}