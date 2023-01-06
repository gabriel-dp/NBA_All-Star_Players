const express = require('express');
const playersController = require('../controllers/players.controllers');

const router = express.Router();

router.get('/', playersController.get);
router.post('/', playersController.post);

module.exports = router;
