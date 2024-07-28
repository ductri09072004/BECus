// src/routes/support.js
import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.use(express.json()); 

router.get('/orderwait', async (req, res) => {
  try {
    
    const completedOrders = await Order.find({ Status: 'Chờ vận chuyển' }).lean();
    res.json(completedOrders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});


export default router;
