import {combineReducers} from 'redux'
import home from './home'

//合并reducer
let reducers=combineReducers({
   home,
})

export default reducers;