const express = require('express');
const adminController = require('../../controllers/admin');

const router = express.Router();

//Admin can view a specific loan
router.get('/loan/:id',  adminController.loanid);

//admin can view all users
router.get('/users', adminController.users);

//admin can view all paid loans
router.get('/loans/paid', adminController.loans);

//admin can view all unpaid loans
router.get('/loans/unpaid', adminController.paid);

//admin can view not fully repaid loans
router.get('/loans/halfPay', adminController.halfPaid);

module.exports = router;
