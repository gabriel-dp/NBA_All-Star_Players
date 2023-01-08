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
	name: {
		first: rString,
		last: rString,
	},
	team: {
		name: rString,
		number: rNumber,
	},
	position: [rString],
	allStar: {
		team: rString,
		role: rString,
		number: rNumber,
	},
	stats: {
		pts: rNumber,
		reb: rNumber,
		ast: rNumber,
	},
	personalData: {
		heightImperial: rString,
		weightImperial: rNumber,
		age: rNumber,
		country: rString,
	},
});

module.exports = mongoose.model('Player', playerSchema);
