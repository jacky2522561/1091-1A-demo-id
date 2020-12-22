const db = require('../utils/database');

const Clothing_77 = class Clothing_77 {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static fetchHomePage() {
    return db.execute('SELECT * FROM clothing_77 where cat_id = 0');
  }
};

// test
const testFetchHomePage = async (req, res) => {
  try {
    await Clothing_77.fetchHomePage().then(([rows]) => {
      console.log(JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

testFetchHomePage();

module.exports = Clothing_77;
