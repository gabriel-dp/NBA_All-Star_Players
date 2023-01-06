const express = require('express');
const dotenv = require('dotenv');

const playerRouter = require('./routers/player.router');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/players', playerRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.warn(`Listening on ${PORT}`);
});
