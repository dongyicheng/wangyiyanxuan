<<<<<<< HEAD
import * as Types from "../action-types";
=======
>>>>>>> 738adb83699fb0c6234750ae36c2e2480f4837c5
import {combineReducers} from 'redux'
import class1 from "./calss1"

import cart from './cart';
import home from './home'

//合并reducer
let reducers=combineReducers({
<<<<<<< HEAD
   class1,
});
=======
   home,cart
})
>>>>>>> 738adb83699fb0c6234750ae36c2e2480f4837c5

export default reducers;