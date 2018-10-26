import React, {Component} from "react"

export default class CategoryBody extends Component {
    render() {
        let categorys = this.props.category;
        return <div className="category-body">
            <div className="advertising">
                <img src="http://yanxuan.nosdn.127.net/9545f529b91ed06092ca85a2b3594019.jpg" alt=""/>
            </div>
            <ul>
                <li>
                    <p>男装</p>
                    <ul>
                        <li>
                            <img src="http://yanxuan.nosdn.127.net/1f44908a54d0a855d376d599372738d4.png" alt=""/>
                            <span>男士外套</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    }
}

