const { Router } = require('express');
const userRoutes = require('./user');
const towerRoutes = require('./tower');
const auth = require('./auth');
const router = Router();
router.get('/', (req, res) => res.send('The server started !'))
router.use('/users', userRoutes);
router.use('/tower', towerRoutes);
router.use('/auth', auth);
module.exports = router
