// src/routes/support.js
import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

router.get('/service', async (req, res) => {
  try {
    
    const questions = await Service.find();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

export default router;
