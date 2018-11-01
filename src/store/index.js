import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import reduxLoggoer from "redux-logger"//打印状态
import reduxThunk from "redux-thunk"//处理异步
import reduxPromise from "redux-Promise"//可以返回Promise对象
<<<<<<< HEAD
let store = createStore(reducer,applyMiddleware(reduxLoggoer,reduxThunk,reduxPromise));
=======
let store = createStore(reducer,applyMiddleware(reduxLoggoer,reduxThunk,reduxPromise))
>>>>>>> 738adb83699fb0c6234750ae36c2e2480f4837c5
window._store=store; //主要为了方便调试
export default store