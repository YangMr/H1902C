import {ADD_INPUT_VALUE, CHANGE_INPUT_VALUE, DELETE_INPUT_VALUE} from "./actionType";

export const ChangeValue = (value)=>{
    return {
        type : CHANGE_INPUT_VALUE,
        value : value
    }
};

export const AddValue = (value)=>{
    return {
        type : ADD_INPUT_VALUE,
        value : value
    }
};

export const DeleteValue = (value)=>{
    return {
        type : DELETE_INPUT_VALUE,
        value : value
    }
};