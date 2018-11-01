import React from 'react';
import ReactDOM from 'react-dom'
import Home from './container/Home/Home'
import Cart from './container/Cart/Cart'
import Class from './container/Class/Class'
import Goods from './container/Goods/Goods'
import Search from "./component/Search/Search"
import Profile from './container/Profile/Profile'
import Category from './container/Class/CategoryBody'
import App from './container/App'
import store from './store/index'
import {Provider} from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/class" component={Class}/>
                <Route path="/goods" component={Goods}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/search" component={Search}/>
            </App>
        </Provider>
<<<<<<< HEAD
    </Router>,window.root);
=======
    </Router>,window.root)
>>>>>>> 738adb83699fb0c6234750ae36c2e2480f4837c5
