const { Types } = require('mongoose');
const Player = require('../models/player');

const checkPlayerExistence = async (id) => {
	const playersFound = await Player.find({ _id: Types.ObjectId(id) });
	if (playersFound.length === 0) throw new Error('Player not found in database');
};

const getPlayer = async (req, res) => {
	try {
		const allPlayers = await Player.find().lean().exec();

		res.status(200).send(allPlayers);
	} catch (error) {
		res.status(500).send(`ERROR at GET getPlayer - ${error}`);
	}
};

const createPlayer = async (req, res) => {
	try {
		const data = req.body;
		await Player.create(data);

		res.status(201).send(`Player created!`);
	} catch (error) {
		res.status(500).send(`ERROR at POST createPlayer - ${error}`);
	}
};

const updatePlayer = async (req, res) => {
	try {
		const { id } = req.params;
		await checkPlayerExistence(id);

		const propertiers = req.body;
		await Player.findByIdAndUpdate({ _id: Types.ObjectId(id) }, { $set: propertiers });

		res.status(200).send(`Player '${id}' updated!`);
	} catch (error) {
		res.status(500).send(`ERROR at PATCH updatePlayer - ${error}`);
	}
};

const deletePlayer = async (req, res) => {
	try {
		const { id } = req.params;
		await checkPlayerExistence(id);

		await Player.findByIdAndRemove({ _id: Types.ObjectId(id) });

		res.status(200).send(`Player '${id}' deleted!`);
	} catch (error) {
		res.status(500).send(`ERROR at DELETE deletePlayer - ${error}`);
	}
};

module.exports = { getPlayer, createPlayer, deletePlayer, updatePlayer };
