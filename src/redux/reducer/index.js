import {combineReducers} from 'redux';
import user from './user'
import admin from './admin'
// import other reducers here

export default combineReducers({
    userData: user,
    admin: admin,
    // other reducers will come here
})