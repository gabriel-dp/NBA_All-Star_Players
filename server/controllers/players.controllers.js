const PlayerModel = require('../models/player');

const get = async (req, res) => {
	const allPlayers = await PlayerModel.find({}).lean().exec();

	res.status(200).send(allPlayers);
};

const post = async (req, res) => {
	const playerData = req.body;
	await PlayerModel.create(playerData);

	res.status(201).send('Player created!');
};

module.exports = { get, post };
