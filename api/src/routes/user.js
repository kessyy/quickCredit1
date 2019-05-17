const express = require('express');
const userController = require('../../controllers/user');
const router = express.Router();

router.post('/signup', userController.signup);

router.post('/signin', userController.signin);

router.get('/loans', userController.repayment)

module.exports = router;
