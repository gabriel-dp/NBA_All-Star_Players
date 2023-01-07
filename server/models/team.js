const mongoose = require('mongoose');

const rString = {
	type: String,
	required: true,
};

const teamSchema = new mongoose.Schema({
	name: rString,
	abbreviation: rString,
	conference: rString,
	division: rString,
	colors: {
		primary: rString,
		secondary: rString,
	},
});

module.exports = mongoose.model('Team', teamSchema);
