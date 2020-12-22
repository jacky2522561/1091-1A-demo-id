const Clothing_77 = require('../models/ClothingModel_77');
exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Clothing_77.fetchHomePage().then(([rows]) => {
      console.log(JSON.stringify(rows));
      data.clothing = rows;
      res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }

  res.render('crown2_77', {
    title: 'jacky',
    data: data.clothing
  });
};
