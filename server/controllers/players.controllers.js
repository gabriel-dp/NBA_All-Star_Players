const PlayerModel = require('../models/player');

const get = async (req, res) => {
	const allPlayers = await PlayerModel.find({}).lean().exec();

	res.send(allPlayers);
};

module.exports = { get };
