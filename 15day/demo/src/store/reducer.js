const defaultState = {
  inputValue : "",
  data : ["英雄联盟","王者荣耀","QQ飞车"]
};

export default (state = defaultState,action)=>{
    if(action.type === "delete_input_value"){
        //深拷贝state数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.splice(action.value,1);
        return newState;
    }

    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }

    if(action.type === "add_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.push({name : action.value});
        newState.inputValue = "";
        return newState;
    }

    if(action.type === "city_hot_data"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.data = action.value;
        return newState;
    }
    return state;
}