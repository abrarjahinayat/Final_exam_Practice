const express = require('express');
const { signupController } = require('../../../Controller/authController');
const router = express.Router();

router.post("/signup", signupController);

module.exports = router;