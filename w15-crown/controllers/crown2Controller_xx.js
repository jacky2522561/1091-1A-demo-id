const Clothing_xx = require('../models/ClothingModel_xx');

exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Clothing_xx.fetchHomePage().then(([rows]) => {
      console.log(JSON.stringify(rows));
      data.clothing = rows;
      //   res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }

  res.render('crown2_xx', {
    title: 'Hsingtai Chung, 123456789',
    data: data.clothing,
  });
};

exports.getProductsByCategory = async (req, res) => {
  let data = {};
  try {
    if (req.params.product === 'hats') data.cid = 1;
    else if (req.params.product === 'jackets') data.cid = 2;
    else if (req.params.product === 'sneakers') data.cid = 3;
    else if (req.params.product === 'womens') data.cid = 4;
    else if (req.params.product === 'mens') data.cid = 5;
    await Clothing_xx.fetchProductByCategory(data.cid).then(([rows]) => {
      console.log(JSON.stringify(rows));
      data.products = rows;
      // res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }

  res.render('product2_xx', {
    title: req.params.product,
    data: data.products,
  });
};
