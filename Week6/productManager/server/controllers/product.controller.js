const Product = require('../models/product.model.js');

module.exports.findAll = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products)
            res.json(products)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.findOne = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json('ERROR GETTING PRODUCT BY ID', err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}