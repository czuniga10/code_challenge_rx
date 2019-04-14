import axios from 'axios';

const baseURL = '/api/user';

function getUser(id) {
    return axios
        .get(`${baseURL}/${id}`)
        .then( res => res )
        .catch( err => {throw err});
}

function getUsers() {
    return axios
        .get(`${baseURL}/`)
        .then( res => res )
        .catch( err => {throw err} );
}

function updateUser( id, body ) {
    return axios
        .put(`${baseURL}/update/${id}`, body)
        .then( res => res )
        .catch( err => {throw err} );
}

export {
    getUser,
    getUsers,
    updateUser
};