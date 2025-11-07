const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlog,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(getBlogs)
  .post(protect, createBlog);

router.route('/slug/:slug')
  .get(getBlogBySlug);

router.route('/:id')
  .get(getBlog)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

module.exports = router;

