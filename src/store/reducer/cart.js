import * as Types from '../action-types';

let initState = {
    currentTypes:true,
    a:true,
    goodList:[]
}
export default function home(state=initState,action) {
    switch (action.type) {
        case Types.GET_CARTLIST:
            return {...state,goodList:action.payload};
        case Types.SET_CHOOES:
            return {...state,goodList:action.payload,a:!state.a};
        case Types.SET_NUM:
            return {...state,goodList:action.payload,a:!state.a};
    }
    return state;
}


