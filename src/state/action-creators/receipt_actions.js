
//action 1
export const add = (name) => {
    return(
        (dispatch) => {
            dispatch({
                type: "add",
                attr_name: name
            });
        }
    )
}

//action 2
export const remove = (name) => {
    return(
        (dispatch) => {
            dispatch({
                type: "remove",
                attr_name: name
            });
        }
    )
}