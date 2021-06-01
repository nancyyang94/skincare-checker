const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;
const baseURL = 'https://skincare-api.herokuapp.com/product';

const actives = ['retinol', 'lactic acid', 'glycolic acid', 'mandelic acid', 'ascorbic acid', 'ascorbic acid (20%)', 'vitamin c', 'Benzoyl Peroxide'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products', (req, res) => {
  axios('https://skincare-api.herokuapp.com/products')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    })
})

app.get('/ingredients', (req, res) => {
  const API = baseURL + '?q=' + req.query['0'];

  const actives1 = [];
  const actives2 = [];

  axios(API)
    .then(response => {
      const product = response.data[0];
      const productName = product.name;
      const ingredients = product['ingredient_list'];

      ingredients.forEach((ingredient) => {
        if (actives.includes(ingredient)) {
          actives1.push(ingredient);
        }
      })
      res.send(actives1);
    }).catch(err => {
      res.send(err)
    })
})


app.get('/ingredients/2', (req, res) => {
  const API = baseURL + '?q=' + req.query['0'];

  const actives2 = [];

  axios(API)
    .then(response => {
      const product = response.data[0];
      const productName = product.name;
      const ingredients = product['ingredient_list'];

      ingredients.forEach((ingredient) => {
        if (actives.includes(ingredient)) {
          actives2.push(ingredient);
        }
      })
      res.send(actives2);
    }).catch(err => {
      res.send(err)
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
