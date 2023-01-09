const express = require('express');
const playersController = require('../controllers/players.controllers');

const router = express.Router();

router.get('/', playersController.getAllPlayers);
router.get('/get/:name', playersController.getPlayer);
router.post('/create', playersController.createPlayer);
router.patch('/update/:id', playersController.updatePlayer);
router.delete('/delete/:id', playersController.deletePlayer);

module.exports = router;
