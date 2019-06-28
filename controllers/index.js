const db = require('../models/data');

exports.getIndex = (req, res) => {
  const sql = `SELECT * FROM datatypes`;

  db.all(sql, [], (err, rows) => {
    if (err) console.log(err);

    res.render('index', { data: rows });
  });
};
