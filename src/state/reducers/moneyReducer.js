export const moneyReducer = (state=11000000000000, action) => {
    if(action.type === "buy"){
        return state - action.payload;
    }else if(action.type === "sell"){
        return state + action.payload;
    }else if(action.type === "clear"){
        return 11000000000000;
    }else{
        return state;
    }
}