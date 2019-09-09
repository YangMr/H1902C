//引入redux，并且获取到createStore
import {createStore} from "redux"

//导入reducer
import reducer from "./reducer"


//使用变量store用来保存createStore,createStore的作用是用来管理数据，将store和reducer关联起来
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//导出 store
export default store