const express = require('express');
const teamsController = require('../controllers/teams.controllers');

const router = express.Router();

router.get('/', teamsController.getAllTeams);
router.get('/get/:teamName', teamsController.getTeam);
router.post('/create', teamsController.createTeam);
router.patch('/update/:id', teamsController.updateTeam);
router.delete('/delete/:id', teamsController.deleteTeam);

module.exports = router;
