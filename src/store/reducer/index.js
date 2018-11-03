
import * as Types from "../action-types";

import {combineReducers} from 'redux'
import class1 from "./calss1"

import cart from './cart';
import home from './home'

//合并reducer
let reducers=combineReducers({
   class1,
   home,cart
});


export default reducers;