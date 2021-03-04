
const INITIAL_STATE = {
    isLogin : true ,
    user: 'company',
    userData: { 
        name: '',
        email: '',
        id: '',
        totalJobs: '',
    }
}

export default (state = INITIAL_STATE , action) => {
    console.log("action", action)
    switch (action.type) {
        case "SET_USER":
            return({
                ...state,
                user: action.payload
            })
        case "SET_USER_DATA":
            return({
                ...state,
                userData: action.payload
            })
    }
            return state;
}