const { Router } = require('express');
const towerCntrl = require('../controllers/tower.control');
const authorize = require('../_middleware/authorize')
const towerRoutes = Router();
towerRoutes.get('/', towerCntrl.getAllTowers);
towerRoutes.get('/list', towerCntrl.listAllTowers);
towerRoutes.delete('/', towerCntrl.deleteTower);
towerRoutes.post('/', authorize(), towerCntrl.createTower);
towerRoutes.put('/', authorize(), towerCntrl.updateTower);
module.exports = towerRoutes
