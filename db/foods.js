const client = require('./client.js');

const createFood = async(foodName, foodCost, foodDescription, foodIngredients) => {
  try {
    await client.query(`
      INSERT INTO foods (name, cost, description, ingredients)
      VALUES ('${foodName}', ${foodCost}, '${foodDescription}', '${foodIngredients}');
    `);
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  createFood
}