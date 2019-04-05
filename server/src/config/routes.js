const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('./models.js');
const { authenticate, jwtKey } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register (req, res) {
  req.body.password = bcrypt.hashSync(req.body.password, 4);
  try {
    const result = await db.insertUser(req.body);
    if (result) {
      const { id, department } = await db.getUser(req.body.username);
      const token = jwt.sign({ id, department }, jwtKey, { expiresIn: '1d' })
      res.status(201).json(token);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await db.getUser(req.body.username);
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({id: user.id, username: user.username}, jwtKey, { expiresIn: '1d' });
      res.status(200).json(token);
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
