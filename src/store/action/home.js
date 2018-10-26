import * as Types from '../action-types'
import {getCategory, getSliders} from "../../api/home"
export default {
    getList() {
        return function (dispatch, getState) {
            getCategory().then(list=>{
                dispatch({
                    type:Types.HOME_LIST,
                    payload:list
                })
            })
        }
    },
    getSlider() {
        return function (dispatch, getState) {
            getSliders().then(sliders=>{
                dispatch({
                    type:Types.GET_SLIDER,
                    payload:sliders
                })
            })
        }
    }
}