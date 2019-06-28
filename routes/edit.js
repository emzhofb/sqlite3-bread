const express = require('express');
const router = express.Router();

const controller = require('../controllers/edit');

router.get('/edit/:id', controller.getEdit);
router.post('/edit/:id', controller.postEdit);

module.exports = router;
