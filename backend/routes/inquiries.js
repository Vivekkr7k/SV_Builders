const express = require('express');
const router = express.Router();
const {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
} = require('../controllers/inquiryController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(protect, getInquiries)
  .post(createInquiry);

router.route('/:id')
  .get(protect, getInquiry)
  .put(protect, updateInquiry)
  .delete(protect, deleteInquiry);

module.exports = router;

