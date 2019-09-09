import {createStore} from "redux"
import reducer from "./reducer"


//让createStore与reducer关联起来
let store = createStore(reducer);

export default store

