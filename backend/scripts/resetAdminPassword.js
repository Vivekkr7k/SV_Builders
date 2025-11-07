require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const connectDB = require('../config/database');

// Connect to database
connectDB();

const resetAdminPassword = async () => {
  try {
    // Find admin by email
    const admin = await Admin.findOne({ email: 'admin@svbuilders.com' });
    
    if (!admin) {
      console.log('❌ Admin not found. Creating new admin...');
      const newAdmin = await Admin.create({
        username: 'admin',
        email: 'admin@svbuilders.com',
        password: 'Admin@123',
        role: 'super-admin',
        active: true
      });
      console.log('✅ Admin created successfully!');
      console.log('Email: admin@svbuilders.com');
      console.log('Password: Admin@123');
      process.exit(0);
    }

    // Reset password
    admin.password = 'Admin@123';
    admin.active = true;
    await admin.save();

    console.log('✅ Admin password reset successfully!');
    console.log('Email: admin@svbuilders.com');
    console.log('Password: Admin@123');
    console.log('Admin ID:', admin._id);
    console.log('Admin Active:', admin.active);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error resetting admin password:', error.message);
    process.exit(1);
  }
};

resetAdminPassword();

