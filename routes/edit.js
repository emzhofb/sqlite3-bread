const express = require('express');
const router = express.Router();

const db = require('../models/data');

router.get('/edit', (req, res) => {
  res.render('edit');
});

module.exports = router;
