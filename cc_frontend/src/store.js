import { createStore, combineReducers } from 'redux';

import updateUser from './reducer/updateUser.reducer';
import getUser from './reducer/getUser.reducer';
import getUsers from './reducer/getUsers.reducer';

let rootReducer = combineReducers({
    updateUser,
    getUser,
    getUsers
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );