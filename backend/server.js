import express from 'express';
import data from './data.js';
const app = express(); //Creating express app

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
//create a port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
