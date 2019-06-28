const express = require('express');
const router = express.Router();

const db = require('../models/data');

router.get('/add', (req, res) => {
  res.render('add');
});

module.exports = router;
