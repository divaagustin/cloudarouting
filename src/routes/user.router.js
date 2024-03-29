const express = require('express');
const Controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/', Controller.getUser);

module.exports = router;