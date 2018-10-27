import {combineReducers} from 'redux'

import cart from './cart';
import home from './home'

//合并reducer
let reducers=combineReducers({
   home,cart
})

export default reducers;