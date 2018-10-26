import * as Types from '../action-types';
import {getCartList,setNum,setChoose} from '../../api/cart';

export default {
    getCartList(){
        // redux-thunk：支持异步的方法派发动作
        return function (dispatch,getState) {
            getCartList().then(list => {
                dispatch({
                    type:Types.GET_CARTLIST,
                    payload:list
                })
            })
        }
    },
    setChoose(i){
        return function (dispatch,getState) {
            setChoose(i).then(list => {
                dispatch({
                    type:Types.SET_CHOOES,
                    payload:list
                })
            })
        }
    },
    setNum(i){
        return function (dispatch,getState) {
            setNum(i).then(list => {
                dispatch({
                    type:Types.SET_NUM,
                    payload:list
                })
            })
        }
    }
}