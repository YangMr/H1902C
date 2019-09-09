//引入actionType.js
import {DELETE_INPUT_VALUE,CHANGE_INPUT_VALUE,ADD_INPUT_VALUE} from "./actionType"

//设置state的默认值
const defaultState = {
    data : [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ],
    inputValue : ""
};

export default (state = defaultState,action)=>{
    if(action.type === DELETE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.data.splice(action.value,1);
        return newState;
    }

    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.data.push(action.value);
        newState.inputValue = ""
        return  newState;
    }
    return state;
}