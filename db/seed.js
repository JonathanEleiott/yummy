const client = require('./client.js');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS foods;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE foods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL UNIQUE,
        cost INTEGER,
        description VARCHAR(100) UNIQUE,
        ingredients TEXT NOT NULL
      );
    `);
  } catch(err) {
    console.log(err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED TO THE DB');

  console.log('DROPPING TABLES');
  await dropTables();
  console.log('TABLES DROPPED');

  console.log(`ADDING TABLES`);
  await createTables();
  console.log('TABLES ADDED');

  await client.end();
  console.log('DISCONNECTED FROM THE DB')
}

syncAndSeed();