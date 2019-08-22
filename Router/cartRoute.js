var router = require('express').Router();
var cartController = require('../Controller/cartController.js');
router.get('/list',cartController.getProductList);
router.post('/add',cartController.addProduct);
router.post('/buy/item',cartController.getTotalPrice);

module.exports = router;