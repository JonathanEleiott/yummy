const client = require('./client.cjs');
const { createFood } = require('./foods.cjs');

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

  console.log('CREATING FOODS');
  await createFood('Carrot Cake', 100, 'Many many carrots. No bunnies.', 'carrots, cake');
  await createFood('Banananan Bread', 333, 'Many much bananas. No monkeys.', 'bananas, bread');
  await createFood('Cwoisaaan', 1, 'French goodness.', 'flakiness, quality stuffs, much butter');
  await createFood('Tiramisu', 222, 'Coffee flavored cake', 'coffee, lady fingers');
  console.log('FOODS CREATED');

  await client.end();
  console.log('DISCONNECTED FROM THE DB')
}

syncAndSeed();