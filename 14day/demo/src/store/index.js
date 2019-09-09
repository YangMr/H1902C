import {createStore} from "redux"
import reducer from "./reducer"


//让createStore与reducer关联起来
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store

