const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/yummy');

module.exports = client;