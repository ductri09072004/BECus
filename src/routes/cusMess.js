
import express from 'express';
import Test from '../models/Test.js';

const router = express.Router();

router.use(express.json()); 

router.get('/messcus', async (req, res) => {
  try {
    const questions = await Test.find({ Status: 'Cus' }).lean();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error.message);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});



export default router;
