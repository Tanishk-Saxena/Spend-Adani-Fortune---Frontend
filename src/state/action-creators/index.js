
//action 1
export const buy = (amount) => {
    return (
        (dispatch) => {
            dispatch({
                type: "buy",
                payload: amount
            });
        }
    )
}

//action 2
export const sell = (amount) => {
    return (
        (dispatch) => {
            dispatch({
                type: "sell",
                payload: amount
            });
        }
    )
}

//action 3
export const clear = () => {
    return (
        (dispatch) => {
            dispatch({
                type: "clear"
            });
        }
    )
}