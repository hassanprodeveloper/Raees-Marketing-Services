
const INITIAL_STATE = {
    adminData : null,
}

export default (state = INITIAL_STATE , action) => {
    console.log("action", action)
    switch (action.type) {
        case "SET_ADMIN_DATA":
            return({
                ...state,
                adminData: action.payload
            })
    }
            return state;
}