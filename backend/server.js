import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const TMDB_BASE_URL = process.env.TMDB_BASELINK;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// console.log(TMDB_API_KEY);
app.post('/get-tmdb-key', (req, res) => {
    res.status(200).send({success: true, apiKey: TMDB_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
