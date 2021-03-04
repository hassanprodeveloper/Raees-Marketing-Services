const updateUser = (data) =>{
    return (dispatch) => {
        dispatch({type: "SET_USER", payload: data})
    }
}
// 
const updateUserData = (data) =>{
    return (dispatch) => {
        dispatch({type: "SET_USER_DATA", payload: data})
    }
}
// 
const updateAdminData = (data) =>{
    return (dispatch) => {
        dispatch({type: "SET_ADMIN_DATA", payload: data})
    }
}
// 


export {
    updateUser,
    updateUserData,
    updateAdminData,
}