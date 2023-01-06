const { Types } = require('mongoose');
const Player = require('../models/player');

const getPlayer = async (req, res) => {
	const allPlayers = await Player.find().lean().exec();

	res.status(200).send(allPlayers);
};

const createPlayer = async (req, res) => {
	const data = req.body;
	await Player.create(data);

	res.status(201).send('Player created!');
};

const updatePlayer = async (req, res) => {
	const { id } = req.params;
	const propertiers = req.body;
	await Player.findByIdAndUpdate({ _id: Types.ObjectId(id) }, { $set: propertiers });

	res.status(200).send('Player updated!');
};

const deletePlayer = async (req, res) => {
	const { id } = req.params;
	await Player.findByIdAndRemove({ _id: Types.ObjectId(id) });

	res.status(200).send('Player deleted!');
};

module.exports = { getPlayer, createPlayer, deletePlayer, updatePlayer };
