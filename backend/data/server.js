const express = require('express');
const dotenv = require('dotenv');
const products = require('../backend/data/products');

const app = express();
dotenv.config();

// routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  console.log(product);
  res.json(product);
});

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
