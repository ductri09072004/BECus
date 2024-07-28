
import express from 'express';
import Promotion from '../models/Promotion.js';

const router = express.Router();

router.get('/promotion', async (req, res) => {
  try {
    
    const questions = await Promotion.find();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

export default router;
