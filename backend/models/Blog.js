const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a blog title'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide an excerpt'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide blog content'],
  },
  featuredImage: {
    type: String,
  },
  images: [{
    type: String,
  }],
  author: {
    type: String,
    default: 'SV Builders',
  },
  category: {
    type: String,
    enum: ['Real Estate', 'Construction', 'Lifestyle', 'News', 'Tips', 'Other'],
    default: 'Real Estate',
  },
  tags: [{
    type: String,
  }],
  published: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Generate slug from title before saving
BlogSchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

module.exports = mongoose.model('Blog', BlogSchema);

