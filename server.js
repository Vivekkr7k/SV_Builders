const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

// Create directories if they don't exist
const uploadsDir = path.join(__dirname, 'uploads');
const docsDir = path.join(__dirname, 'docs');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

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
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: imageFilter
});

const uploadDoc = multer({
  storage: docStorage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
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

// Upload multiple images
app.post('/api/upload/images', uploadImage.array('images', 10), (req, res) => {
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

// Upload project files (image, brochure, price list) - using separate endpoints is preferred
// This endpoint is optional and can be used for batch uploads if needed

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  res.status(400).json({ error: error.message });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

