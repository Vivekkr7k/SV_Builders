const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

// Import routes
const projects = require('./routes/projects');
const inquiries = require('./routes/inquiries');
const blogs = require('./routes/blogs');
const auth = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' })); // Increase JSON payload limit
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // Increase URL-encoded payload limit

// Create uploads and docs directories in backend folder
const uploadsDir = path.join(__dirname, 'uploads');
const docsDir = path.join(__dirname, 'docs');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsDir));
app.use('/docs', express.static(docsDir));

// Configure multer for images (uploads folder)
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'project-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure multer for documents (docs folder)
const docStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, docsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filters
const imageFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, gif, webp) are allowed!'));
  }
};

const docFilter = (req, file, cb) => {
  const allowedTypes = /pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = file.mimetype === 'application/pdf' || 
                   file.mimetype === 'application/msword' ||
                   file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only document files (PDF, DOC, DOCX) are allowed!'));
  }
};

// Multer instances
const uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit (increased from 10MB)
  fileFilter: imageFilter
});

const uploadDoc = multer({
  storage: docStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit (increased from 20MB)
  fileFilter: docFilter
});

// Upload single image
app.post('/api/upload/image', uploadImage.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

// Upload multiple images (increased limit for larger files)
app.post('/api/upload/images', uploadImage.array('images', 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No image files uploaded' });
  }
  const files = req.files.map(file => ({
    filename: file.filename,
    path: `/uploads/${file.filename}`
  }));
  res.json({ success: true, files });
});

// Upload brochure
app.post('/api/upload/brochure', uploadDoc.single('brochure'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No brochure file uploaded' });
  }
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/docs/${req.file.filename}`
  });
});

// Upload price list
app.post('/api/upload/pricelist', uploadDoc.single('pricelist'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No price list file uploaded' });
  }
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/docs/${req.file.filename}`
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum file size is 100MB.' });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ error: 'Too many files. Maximum is 20 files per request.' });
    }
  }
  res.status(400).json({ error: error.message });
});

// Mount routes
app.use('/api/projects', projects);
app.use('/api/inquiries', inquiries);
app.use('/api/blogs', blogs);
app.use('/api/auth', auth);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

