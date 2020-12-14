const { Router } = require('express');
const userCntrl = require('../controllers/user.control');
const authorize = require('../_middleware/authorize')
const userRoutes = Router();
userRoutes.get('/', userCntrl.getAllUsers)
userRoutes.post('/', userCntrl.createUser);
module.exports = userRoutes
