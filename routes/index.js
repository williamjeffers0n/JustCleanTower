const { Router } = require('express');
const userRoutes = require('./user');
const towerRoutes = require('./tower');
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))
router.use('/users', userRoutes);
router.use('/tower', towerRoutes);
module.exports = router
