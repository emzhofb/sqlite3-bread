const express = require('express');
const router = express.Router();

const controller = require('../controllers/add');

router.get('/add', controller.getAdd);

module.exports = router;
