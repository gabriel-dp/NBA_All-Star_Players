import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.warn(`Listening on ${PORT}`);
});
