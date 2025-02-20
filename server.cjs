const { getAllFoods, getFoodById } = require('./db/foods.cjs');

const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/api/v1/foods', async(req, res, next) => {
  try {
    const allFoods = await getAllFoods();
    res.send(allFoods);
  } catch(err) {
    next(err);
  }
});

app.get('/api/v1/foods/:id', async(req, res, next) => {
  try {
    const { id } = req.params;
    const foundFood = await getFoodById(id);

    if(!foundFood) {
      next({ status: 400, message: 'Food Not Found'});
    }
  
    res.send(foundFood);
  } catch(err) {
    next(err);
  }
});

app.use((req, res, next) => {
  next({ status: 404, message: 'Page Not Found'});
  // res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`);
});