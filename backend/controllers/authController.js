const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'svbuilders_super_secret_jwt_key_change_in_production_2024';
  return jwt.sign({ id }, secret, {
    expiresIn: '30d',
  });
};

// @desc    Register admin
// @route   POST /api/auth/register
// @access  Private (Super Admin only)
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if admin exists
    const adminExists = await Admin.findOne({ $or: [{ email }, { username }] });

    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: 'Admin already exists',
      });
    }

    // Create admin
    const admin = await Admin.create({
      username,
      email,
      password,
      role: role || 'admin',
    });

    res.status(201).json({
      success: true,
      data: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    // Debug: Log the entire request
    console.log('=== LOGIN REQUEST ===');
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);
    console.log('Content-Type:', req.headers['content-type']);
    
    const { email, password } = req.body;

    // Debug logging
    console.log('Extracted values:', { email, password, emailType: typeof email, passwordType: typeof password });

    // Validate email & password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Normalize email to lowercase for consistency
    const normalizedEmail = email.toLowerCase().trim();
    console.log('Normalized email:', normalizedEmail);

    // Check for admin
    const admin = await Admin.findOne({ email: normalizedEmail }).select('+password');

    if (!admin) {
      console.log('Admin not found for email:', normalizedEmail);
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    console.log('Admin found:', { id: admin._id, email: admin.email, active: admin.active });

    // Check if admin is active
    if (!admin.active) {
      console.log('Admin account is deactivated');
      return res.status(401).json({
        success: false,
        message: 'Admin account is deactivated',
      });
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate token
    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      token,
      data: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update admin details
// @route   PUT /api/auth/updatedetails
// @access  Private
exports.updateDetails = async (req, res) => {
  try {
    const fieldsToUpdate = {
      username: req.body.username,
      email: req.body.email,
    };

    const admin = await Admin.findByIdAndUpdate(
      req.admin.id,
      fieldsToUpdate,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update password
// @route   PUT /api/auth/updatepassword
// @access  Private
exports.updatePassword = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('+password');

    // Check current password
    if (!(await admin.matchPassword(req.body.currentPassword))) {
      return res.status(401).json({
        success: false,
        message: 'Password is incorrect',
      });
    }

    admin.password = req.body.newPassword;
    await admin.save();

    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      token,
      message: 'Password updated successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

