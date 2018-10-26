import *as Types from "../action-types"
import {getCategory} from "../../../api/class"
export default {
    getCategorys(){
        return function (dispatch,getState) {
            getCategory().then(category=>{
                dispatch({
                    type:Types.GET_CATEGORY,
                    payload:category
                })
            })
        }
    }
}