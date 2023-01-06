const jsonData = require('../data/players.json');

const get = (req, res) => {
	const data = jsonData;
	res.json(data);
};

module.exports = { get };
