const { Router } = require('express');
const { 
getUserController, 
createNewUserController, 
getUserByEmailController,
} = require('../controller/usersController');

const usersRoute = Router();


usersRoute.post('/login', getUserController);
usersRoute.post('/register', createNewUserController);
usersRoute.get('/users', getUserByEmailController);

module.exports = usersRoute;