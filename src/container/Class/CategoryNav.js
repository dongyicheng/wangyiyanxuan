import React, {Component} from "react"
import {Link} from "react-router-dom"


export default class CategoryNav extends Component {
    render() {
        console.log(this.props);
        return <div className="category-nav">
            <ul className="category-header">
                {
                    this.props.category.map((item,index)=>{
                        return <li key={index}>{item.title}</li>
                    })
                }

            </ul>
        </div>
    }
}

