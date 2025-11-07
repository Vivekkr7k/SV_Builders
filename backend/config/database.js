const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use MongoDB URI from environment or default to provided connection string
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://vivekkumar787067:Vivek09876@cluster0.gjptwuk.mongodb.net/svbuilders?retryWrites=true&w=majority&appName=Cluster0';
    
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

