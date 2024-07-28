import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // URL của MongoDB Atlas
    const mongoURI = 'mongodb+srv://blueduck0907:Fcsunny0907@demo1.rpbijnx.mongodb.net/ThienPhucGH';
    
    // Kết nối đến MongoDB với các tùy chọn cấu hình
    await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
