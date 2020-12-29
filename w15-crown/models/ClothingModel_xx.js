const db = require('../utils/database');

const Clothing_xx = class Clothing_xx {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static fetchHomePage() {
    return db.execute('SELECT * FROM clothing_xx where cat_id = 0');
  }

  static fetchProductByCategory(cid) {
    return db.execute('SELECT * FROM clothing_xx where cat_id = ?', [cid]);
  }
};

// test
const test = async (req, res) => {
  try {
    await Clothing_xx.fetchProductByCategory(2).then(([rows]) => {
      console.log(JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// test();

module.exports = Clothing_xx;
