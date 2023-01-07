const { Types } = require('mongoose');
const Team = require('../models/team');

const getAllTeams = async (req, res) => {
	try {
		const allTeams = await Team.find().lean().exec();

		res.status(200).send(allTeams);
	} catch (error) {
		res.status(500).send(`ERROR at GET getAllTeams - ${error}`);
	}
};

const createTeam = async (req, res) => {
	try {
		const data = req.body;
		await Team.create(data);

		res.status(201).send(`Team created!`);
	} catch (error) {
		res.status(500).send(`ERROR at POST createTeam - ${error}`);
	}
};

const updateTeam = async (req, res) => {
	try {
		const { id } = req.params;
		const propertiers = req.body;
		await Team.findByIdAndUpdate({ _id: Types.ObjectId(id) }, { $set: propertiers });

		res.status(200).send(`Team '${id}' updated!`);
	} catch (error) {
		res.status(500).send(`ERROR at PATCH updateTeam - ${error}`);
	}
};

const deleteTeam = async (req, res) => {
	try {
		const { id } = req.params;
		await Team.findByIdAndRemove({ _id: Types.ObjectId(id) });

		res.status(200).send(`Team '${id}' deleted!`);
	} catch (error) {
		res.status(500).send(`ERROR at DELETE deleteTeam - ${error}`);
	}
};

module.exports = { getAllTeams, createTeam, deleteTeam, updateTeam };
