import React, { Component } from 'react'

export default class Scroll extends Component {
  render() {
    return (
      <div>
        <div className="aside" ref={(x)=>{this.a=x}}>
            <p>新品首发</p>
            <p>查看全部></p>
        </div>
        <div className="scroll">
            <div className="list">
                <ul>
                    {this.props.list.map((item,index)=>{
                        if(index>=8)return;
                        return <li>
                            <img src={item.url}></img>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
    )
  }
}
