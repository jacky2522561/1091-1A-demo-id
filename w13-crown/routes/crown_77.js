var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_77', { title: 'Hsingtai Chung, 123456789' });
});

router.get('/shop_77/:product', function (req, res, next) {
  res.render('product_77', {
    title: 'Hsingtai Chung, 123456789',
    product: req.params.product,
  });
});

module.exports = router;
