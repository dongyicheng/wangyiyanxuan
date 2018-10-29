import React, {Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import actions from "../../store/action/class";
import "./index.less"

class Search extends Component {
    render() {
        return <div className="search">
            <div className="search-input">
                <input type="text"/>
                <Link to="/">取消</Link>
            </div>
            <div className="search-body">
                <p>热门搜索</p>
                {this.props.category.map((item,index)=>{
                    return <div className="search-list" key={index}>{item.title}</div>
                })}
            </div>

        </div>
    }
}
export default connect(state=>({...state.class1}),actions)(Search)
