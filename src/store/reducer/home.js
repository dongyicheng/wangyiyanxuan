import * as Types from '../action-types'

let initState={
    sliders:[],//用于接受轮播图响应回来的数据
    list:[],
}
export default function home(state=initState,action){
    switch (action.type) {
        case Types.HOME_LIST:
            return {...state,list:action.payload}
        case Types.GET_SLIDER:
            return {...state,sliders:action.payload}
        // case Types.SET_LESSONS:
        //     return {...state,lessons:{
        //         list:[...state.lessons.list,...action.payload.list],
        //         offset:state.lessons.offset+state.lessons.limit,
        //         limit:5,
        //         hasMore:true,
        //     }}
        default:
            break;
    }
    return state
}
