import * as Types from "../action-types";
import {combineReducers} from 'redux'
import class1 from "./calss1"

//合并reducer
let reducers=combineReducers({
   class1,
});

export default reducers;