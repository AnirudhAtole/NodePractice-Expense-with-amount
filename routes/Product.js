const express = require('express');

const router = express.Router();

const expanseController = require('../controller/Product');

router.get('/products' , expanseController.getProducts );
router.post('/del-product/:id',expanseController.delProduct);
router.post('/add-product',expanseController.addProduct);

module.exports = router;