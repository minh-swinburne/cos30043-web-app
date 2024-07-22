const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

const ROOT_DIR = path.resolve(__dirname, '../../frontend/dist');

app.use(express.static(ROOT_DIR));

app.get('/api/hello', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.get('/api/posts/:id', (req, res) => {
  res.send(`Post ${req.params.id}`);
});

app.get("*", (req, res) => res.sendFile(path.join(ROOT_DIR, 'index.html')));

app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
