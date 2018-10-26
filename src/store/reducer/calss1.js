import * as Types from "../action-types";
let initState = {
    category:[],
};
export default function class1(state=initState,action) {
    switch (action.type){
        case Types.GET_CATEGORY:
            return {...state,category:action.payload}
    }
    return state;
}