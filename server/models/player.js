const mongoose = require('mongoose');

const rString = {
	type: String,
	required: true,
};

const rNumber = {
	type: Number,
	required: true,
};

const playerSchema = new mongoose.Schema({
	firstName: rString,
	lastName: rString,
	position: rString,
	team: rString,
	number: rNumber,
	isCaptain: Boolean,
	stats: {
		pts: rNumber,
		reb: rNumber,
		ast: rNumber,
	},
});

module.exports = mongoose.model('Player', playerSchema);
