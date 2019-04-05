const db = require('../database/dbConfig.js');

const insertUser = user =>
  db('users')
    .insert(user);

const getUser = username =>
  db('users')
    .where('username', username)
    .select('id', 'username', 'password')
    .first()

const getCredentials = username =>
  db('users')
    .where('username', username)
    .select('password')
    .first()

module.exports = {
  insertUser,
  getUser,
  getCredentials
}