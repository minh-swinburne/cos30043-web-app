const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const secretKey = 'your-very-secure-secret-key';
const refreshTokenSecret = 'your-refresh-token-secret-key';
const refreshTokens = []; // Store refresh tokens securely, e.g., in a database

app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Simulate fetching user from database
  const user = { id: 1, username: 'testuser', password: '$2a$10$hashedpassword' };

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id, username: user.username }, refreshTokenSecret, { expiresIn: '7d' });
  
  refreshTokens.push(refreshToken);

  res.json({
    accessToken,
    refreshToken,
    expiresIn: '15m'
  });
});

app.post('/token', (req, res) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  if (!refreshTokens.includes(token)) return res.sendStatus(403);

  jwt.verify(token, refreshTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '15m' });

    res.json({
      accessToken,
      expiresIn: '15m'
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
