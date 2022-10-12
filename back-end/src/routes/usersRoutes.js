const { Router } = require('express');
const { getUserController } = require('../controller/usersController');

const usersRoute = Router();


usersRoute.get('/users', getUserController);
usersRoute.post('/login', getUserController);

module.exports = usersRoute;