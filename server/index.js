const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./database/connect');
const playersRouter = require('./routers/players.router');
const teamsRouter = require('./routers/teams.router');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors({ origin: '*', methods: ['GET'] }));
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.warn(`Listening on ${PORT}`);
});
