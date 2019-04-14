import { GET_USER } from '../actions/actionCreators';

let userState = {};

function getUser( state = userState, action ){
    switch( action.type ) {
        case GET_USER:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default getUser