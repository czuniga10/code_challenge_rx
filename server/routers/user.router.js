const express = require('express');
const getDb = require('../database/bootstrap.database');

const userRouter = express.Router();
//get user by id
//postman test worked
userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const db = getDb();
    db.READ.get_user( [id] )
        .then( user => res.status(200).send(user))
        .catch( err => res.status(500).send(err))
});
//get all users
//postman test worked
userRouter.get('/', (req, res) => {
    const db = getDb();
    db.READ.get_users()
        .then( users => res.status(200).send(users))
        .catch( err => res.status(500).send(err))
});
//create new user
//postman test worked
userRouter.post('/create', (req, res) => {
    const db = getDb();
    const { first_name, last_name, phone, email } = req.body;
    db.CREATE.create_user([ first_name, last_name, phone, email ])
        .then( (promise) => res.status(200).send(promise))
        .catch( err => res.status(500).send(err))
});
//update user by id
//postman test worked
userRouter.put('/update', (req, res) => {
    const db = getDb();
    const { id, first_name, last_name, phone, email } = req.body;
    db.UPDATE.update_user([id, first_name, last_name, phone, email])
        .then( promise => res.status(200).send(promise))
        .catch( err => res.status(500).send(err) )
});
//delete user by id
//postman test worked
userRouter.delete('/delete/:id', (req, res) => { 
    const id = req.params.id;   
    const db = getDb();
    db.DELETE.delete_user([id])
        .then( () => res.status(200).send() )
        .catch( err => res.status(500).send(err) )
});

module.exports = userRouter;