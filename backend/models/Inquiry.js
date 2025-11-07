const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  projectName: {
    type: String,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved', 'archived'],
    default: 'new',
  },
  source: {
    type: String,
    enum: ['homepage', 'project-page', 'contact', 'other'],
    default: 'homepage',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Inquiry', InquirySchema);

