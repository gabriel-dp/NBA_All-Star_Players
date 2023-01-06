import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: String,
	lastName: String,
	position: String,
	team: String,
	number: Number,
	isCaptain: Boolean,
	stats: {
		pts: Number,
		reb: Number,
		ast: Number,
	},
	image: String,
});

export default mongoose.model('Player', playerSchema);
