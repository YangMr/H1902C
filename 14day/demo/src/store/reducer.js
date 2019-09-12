const defaultState = {
    inputValue : "",
    list : ["西游记","红楼梦","三国演艺","水浒传","英雄联盟"]
}

//reducer 可以接收state,但不能改变state
export default (state = defaultState,action)=>{
    if(action.type === "change_input_value"){
        //拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === "add_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.List.push(action.value);
        newState.inputValue = ""
        return newState;
    }

    if(action.type === "del_input_value"){
        const newState = JSON.parse(JSON.stringify(state));

        newState.List.splice(action.value,1);
        return newState;
    }
    return state;
}