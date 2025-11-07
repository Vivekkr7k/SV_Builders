require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const connectDB = require('../config/database');

// Connect to database
connectDB();

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@svbuilders.com' });
    
    if (existingAdmin) {
      console.log('Admin already exists!');
      process.exit(0);
    }

    // Create default admin
    const admin = await Admin.create({
      username: 'admin',
      email: 'admin@svbuilders.com',
      password: 'Admin@123', // Change this password after first login
      role: 'super-admin',
    });

    console.log('Default admin created successfully!');
    console.log('Email: admin@svbuilders.com');
    console.log('Password: Admin@123');
    console.log('Please change the password after first login.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();

