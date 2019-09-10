const defaultState = {
    inputValue : "hello world",
    data : ["jack","rose","mack","tent"]
}

export default (state = defaultState,action)=>{
    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === "add_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.push(action.value)
        newState.inputValue = "";
        return newState;
    }

    if(action.type === "delete_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.splice(action.value,1);
        return newState;
    }
    return state;
}