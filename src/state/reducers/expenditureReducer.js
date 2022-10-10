export const expenditureReducer = ((state=0, action) => {
    if(action.type === "buy"){
        return state + action.payload;
    }else if(action.type === "sell"){
        return state - action.payload;
    }else if(action.type === "clear"){
        return 0;
    }else{
        return state;
    }
})