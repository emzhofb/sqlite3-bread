const express = require('express');
const router = express.Router();

const controller = require('../controllers/delete');

router.get('/delete/:id', controller.getDelete);

module.exports = router;
