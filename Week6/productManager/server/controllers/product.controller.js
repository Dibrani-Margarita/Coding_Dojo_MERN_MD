const Product = require('../models/product.model.js');

module.exports.findAll = (req, res) => {
    res.json({
        message: 'Hello world'
    });
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}