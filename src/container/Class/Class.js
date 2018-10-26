import React, {Component} from "react"
import "./index.less"
import {connect} from "react-redux"
import actions from "../../store/action/class"
import CategoryNav from "./CategoryNav"
import CategoryBody from "./CategoryBody"

class Class extends Component {
    // constructor(){
    //     super();
    //     this.categorys = this.props.category;
    // }
    componentDidMount(){
        this.props.getCategorys()
    }
    // filterCategory=(a)=>{
    //     return this.categoryBody = this.categorys.map((item,index)=>{
    //         return index==a
    //     })
    // };
    render() {
        return <div className="category">
            <div className="search">
                    <div className="input">
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索商品,共123456件商品</span>
                    </div>
            </div>
            <CategoryNav category={this.props.category}></CategoryNav>
            <CategoryBody category={this.props.category}></CategoryBody>
        </div>
    }
}
export default connect(state=>({...state.class1}),actions)(Class)
