const express = require('express');
const router = express.Router();

const controller = require('../controllers/add');

router.get('/add', controller.getAdd);
router.post('/add', controller.postAdd);

module.exports = router;
