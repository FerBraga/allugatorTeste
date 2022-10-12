const { Router } = require('express');
const { getUserController, createNewUserController } = require('../controller/usersController');
const { use } = require('./productsRoute');

const usersRoute = Router();


usersRoute.post('/login', getUserController);
usersRoute.post('/register', createNewUserController);

module.exports = usersRoute;