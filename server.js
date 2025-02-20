const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('WELCOME');
});

app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(err.status).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`);
});