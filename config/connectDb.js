const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log(' mongoose connected successfully');
  } catch (error) {
    console.error('error connecting to database', error);
    process.exit(1);
  }
};

module.exports = connectDb;
