import * as Types from '../action-types';

let initState = {
    currentTypes:true, // 头部编辑状态
    allStatus:false, // 编辑页面，底部的选中状态
    a:true, // 没有实际意义，仅用于渲染页面
    goodList:[] // 购物车列表信息
}
export default function home(state=initState,action) {
    switch (action.type) {
        case Types.GET_CARTLIST:
            let allstatus = action.payload.every((item) => {
                return item.isSelected;
            })
            return {...state,goodList:action.payload,allStatus:allstatus};
        case Types.SET_CHOOES:
            let status = action.payload.every((item) => {
                return item.isSelected;
            })
            return {...state,goodList:action.payload,allStatus:status,a:!state.a};
        case Types.SET_NUM:
            return {...state,goodList:action.payload,a:!state.a};
        case Types.SET_CURTYPE:
            if(state.currentTypes){
                return {...state,currentTypes:!state.currentTypes,allStatus:false}
            }else{
                state.goodList = state.goodList.map((item) => {
                    item.delSelect = false;
                    return item;
                })
                let status1 = state.goodList.every((item) => {
                    return item.isSelected;
                })
                console.log(status1,789);
                return {...state,currentTypes:!state.currentTypes,allStatus:status1,goodList:state.goodList};
            }
        case Types.SET_DEL:
            state.goodList[action.i]['delSelect'] ? state.goodList[action.i]['delSelect'] = !state.goodList[action.i]['delSelect']: state.goodList[action.i]['delSelect'] = true;
            return {...state,goodList:state.goodList,a:!state.a};
        case Types.DEL_DATA:
            return {...state,goodList:action.payload};
    }
    return state;
}


