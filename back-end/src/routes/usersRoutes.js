const { Router } = require('express');
const { getUserController } = require('../controller/usersController');

const usersRoute = Router();

usersRoute.get('/users', getUserController);

module.exports = usersRoute;