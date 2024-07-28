import express from 'express';
import Test from '../models/Test.js';

const router = express.Router();

router.use(express.json()); 

// Lấy tất cả các tin nhắn, có thể lọc theo Email nếu được cung cấp trong query parameters
router.get('/test', async (req, res) => {
  try {
    const { email } = req.query; // Lấy email từ query parameters
    console.log('Email query parameter:', email);
    let query = {};
    if (email) {
      query.Email = email; // Thêm điều kiện lọc nếu email được cung cấp
    }
    const questions = await Test.find(query).lean();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error.message);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.post('/test', async (req, res) => {
  try {
    const { 
      Email, 
      Mess, 
      Status 
    } = req.body;
    const newMessage = new Test({ Email, Mess, Status });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
  }
});

export default router;
