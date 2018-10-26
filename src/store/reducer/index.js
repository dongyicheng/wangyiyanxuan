import {combineReducers} from 'redux'
import cart from './cart';

//合并reducer
let reducers=combineReducers({
   cart
})

export default reducers;