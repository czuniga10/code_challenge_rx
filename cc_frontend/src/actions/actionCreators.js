export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const UPDATE_USER = "UPDATE_USER";

export function getUserInfo(user){
    return {
        type: GET_USER,
        payload: user
    }
}

export function getUsersInfo(users){
    return {
        type: GET_USERS,
        payload: users
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}