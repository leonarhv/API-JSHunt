const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// const Product = mongoose.model('Product');
// routes.get('/', (req, res) => {
//     // Product.create({
//     //     title: 'React Native',
//     //     description: 'Create native apps with react',
//     //     url: 'http://github.com/facebook/react-native'
//     // })
//     res.send("Hello, Leo")
// });

// Rota produtos
routes.get('/products', ProductController.index);

module.exports = routes;