const mongoose = require('mongoose');

function connectDB() {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => console.warn('MongoDB Connected!'))
		.catch((error) => console.error(error));
}

module.exports = connectDB;
