const db = require('../models/data');

exports.getEdit = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT *
              FROM datatypes
              WHERE id  = ?`;

  db.get(sql, [id], (err, row) => {
    if (err) console.log(err);

    res.render('edit', { data: row });
  });

};
