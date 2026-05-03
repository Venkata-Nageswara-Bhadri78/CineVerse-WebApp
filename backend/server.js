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

app.post('/get-tmdb-key', (req, res) => {
    res.status(200).send({success: true, apiKey: TMDB_API_KEY });
});

app.use('/tmdb', async (req, res) => {
  const path = req.path; 
  
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  const queryObj = { ...req.query };
  delete queryObj.api_key;
  const queryString = new URLSearchParams(queryObj).toString();
  
  // Use TMDB's direct Cloudfront IP to bypass ISP DNS blocks
  const apiLink = `http://3.175.86.50/3/${cleanPath}?api_key=${TMDB_API_KEY}${queryString ? '&' + queryString : ''}`;

  try {
    const response = await fetch(apiLink, {
      headers: { 'Host': 'api.themoviedb.org' }
    });
    if (!response.ok) {
      return res.status(response.status).json({ error: 'TMDB API error' });
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: 'Failed to fetch from TMDB' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
