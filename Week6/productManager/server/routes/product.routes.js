const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.findAll);
    app.post('/api/products', ProductController.createProduct);
    app.get('api/products/:id', ProductController.findOne);
    app.put('api/products/:id', ProductController.updateProduct);
    app.delete('api/products/:id', ProductController.deleteProduct);
}