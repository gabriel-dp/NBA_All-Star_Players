import express from 'express';
import { config } from 'dotenv';

import fs from 'fs';

config();

const app = express();
app.use(express.json());

// Uses fs to load .json
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

app.get('/api/players', (req, res) => {
	const data = loadJSON('./data/players.json');
	res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.warn(`Listening on ${PORT}`);
});
