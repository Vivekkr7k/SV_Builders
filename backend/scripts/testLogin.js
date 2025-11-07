require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const connectDB = require('../config/database');

connectDB();

const testLogin = async () => {
  try {
    const email = 'admin@svbuilders.com';
    const password = 'Admin@123';
    
    console.log('Testing login with:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('---');
    
    // Find admin
    const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+password');
    
    if (!admin) {
      console.log('❌ Admin not found!');
      return;
    }
    
    console.log('✅ Admin found:');
    console.log('  ID:', admin._id);
    console.log('  Email:', admin.email);
    console.log('  Username:', admin.username);
    console.log('  Active:', admin.active);
    console.log('  Password hash exists:', !!admin.password);
    console.log('---');
    
    // Test password match
    const isMatch = await admin.matchPassword(password);
    console.log('Password match:', isMatch ? '✅ YES' : '❌ NO');
    
    if (!isMatch) {
      console.log('---');
      console.log('Trying to reset password...');
      admin.password = password;
      await admin.save();
      console.log('✅ Password reset, testing again...');
      
      const admin2 = await Admin.findOne({ email: email.toLowerCase() }).select('+password');
      const isMatch2 = await admin2.matchPassword(password);
      console.log('Password match after reset:', isMatch2 ? '✅ YES' : '❌ NO');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
  }
};

testLogin();

