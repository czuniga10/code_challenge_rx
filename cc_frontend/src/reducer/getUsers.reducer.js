import { GET_USERS } from '../actions/actionCreators';

let usersState = {};

function getUsers( state = usersState, action ){
    switch( action.type ) {
        case GET_USERS:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default getUsers