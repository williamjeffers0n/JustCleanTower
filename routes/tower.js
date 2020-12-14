const { Router } = require('express');
const towerCntrl = require('../controllers/tower.control');
const authorize = require('../_middleware/authorize')
const towerRoutes = Router();
towerRoutes.get('/', towerCntrl.getAllTowers)
towerRoutes.post('/', towerCntrl.createTower);
module.exports = towerRoutes
